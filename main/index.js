// Native
const { join } = require('path')
const { format } = require('url')

// Packages
const { BrowserWindow, app, ipcMain,  Menu, Tray } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { menubar } = require('menubar');
const clipboard = require('electron-clipboard-extended')

const path = require('path');

const Store = require('electron-store');
const store = new Store();
let index = 0;

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const url = isDev
    ? 'http://localhost:8000/start'
    : format({
      pathname: join(__dirname, '../renderer/start.html'),
      protocol: 'file:',
      slashes: true
    })

  // mainWindow.loadURL(url)
  const mb = menubar({
    icon: join(__dirname, 'assets/IconTemplate.png'),
    index: url,
    browserWindow: {
      width: 300,
      resizable: false,
      backgroundColor: '#7A7371',
      opacity: '0.13',
      darkTheme: true,
      webPreferences: {
        nodeIntegration: false,
        preload: join(__dirname, 'preload.js')
      }
    }
  });

  mb.on('ready', () => {
    console.log('Menubar app is ready.');
    store.set('index', index);

    clipboard.on('text-changed', () => {
      index = store.get('index')
      let currentText = clipboard.readText();
      store.set(`currentText-${index}`, currentText)
      console.log(`----> currentIndex-${index}, currentText-${currentText}`)
      // console.log(`----> currentText-${index} is:`, store.get(`currentText-${index}`))
      index++
      store.set('index', index);
    }).startWatching();
  });

  mb.on('show', () => {
    let data = []
    for(let i = 0; i <= index - 1; i++) {
      data.push(store.get(`currentText-${i}`))
    }
    console.log({data})
    //mb.window.openDevTools()
    console.log('going to show')
    if(index !== 0 || data) {
      mb.window.webContents.send('message', data)
    }
  })
})

// // Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message` and resend the received message to the renderer process

    // ipcMain.send('message', (event, message) => {
    //   console.log('message', message)
    //   event.sender.send('message', 'fuck')
    // })

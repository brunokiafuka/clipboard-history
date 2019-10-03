// Native
const {join} = require('path')
const {format} = require('url')

// Packages
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const {clipboardWatcher} = require('./clipboard')
const {menubar: MENU_BAR} = require('menubar');


const url = isDev ?
  'http://localhost:8000/start' :
  format({
    pathname: join(__dirname, '../renderer/start.html'),
    protocol: 'file:',
    slashes: true
  })

const menuBar = () => MENU_BAR({
  'node-integration': true,
  icon: join(__dirname, 'assets/IconTemplate.png'),
  index: url,
  browserWindow: {
    width: 300,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js')
    }
  }
});

const onReady = (store) => () => {
  console.log('Menubar app is ready.');
  clipboardWatcher(store)
}

const onShow = (store, mb) => () => {
  console.log('here showing')
  let data = []
  const index = store.get('index')
  for (let i = 0; i <= index - 1; i++) {
    data.push(store.get(`currentText-${i}`))
  }
  // mb.window.openDevTools()
  console.log({data, index})
  if (index === 0 || data.length === 0) {
    mb.window.setVibrancy('ultra-dark')
    return mb.window.setSize(300, 30)
  } else {
    mb.window.setVibrancy('dark')
    mb.window.setSize(300, 200)
    return mb.window.webContents.send('read-from-clipboard', data)
  }
}


module.exports = {
  menuBar,
  onReady,
  onShow
}

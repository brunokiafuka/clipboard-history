// Packages
const {app, ipcMain} = require('electron')
const prepareNext = require('electron-next')
const {menuBar, onShow, onReady} = require('./menubar');
const {writeToClipboard} = require('./clipboard')
const {store} = require('./store');

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')
  const mb = menuBar();
  store.set('index', 0);
  mb.on('ready', onReady(store, mb));
  mb.on('show', onShow(store, mb));
})

// // Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

ipcMain.on('copy-to-clipboard', (event, text) => writeToClipboard(text))
ipcMain.on('quit', app.quit)

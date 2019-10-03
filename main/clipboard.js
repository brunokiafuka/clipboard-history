const clipboard = require('electron-clipboard-extended')
const {store} = require('./store')
const {saveClipboardText} = require('./actions');

const clipboardWatcher = (store) => {
  clipboard.on('text-changed', () => {
    console.log(`--> tex has changed`)
    let currentText = clipboard.readText();
    saveClipboardText(currentText)
  }).startWatching();
}

const writeToClipboard = (txt) => clipboard.writeText(txt)

module.exports = {
  clipboardWatcher,
  writeToClipboard
}
// Packages
const { app, ipcMain } = require("electron");
const prepareNext = require("electron-next");
const { autoUpdater } = require("electron-updater");
const { menuBar, onShow, onReady } = require("./menubar");
const { writeToClipboard } = require("./clipboard");
const { openAboutWindow } = require("./windows/about");
const { setWindowSize } = require("../utils");
const { store } = require("./store");

// Prepare the renderer once the app is ready
let mb;
app.on("ready", async () => {
  // Auto-update
  autoUpdater.checkForUpdatesAndNotify();
  autoUpdater.on("update-downloaded", () => {
    autoUpdater.quitAndInstall();
  });
  // NextJS
  await prepareNext("./renderer");

  store.set("index", 0);
  mb = menuBar();
  mb.on("ready", onReady(store, mb));
  mb.on("show", onShow(store, mb));
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

ipcMain.on("copy-to-clipboard", (event, text) => writeToClipboard(text));
ipcMain.on("open-about", (event, text) => openAboutWindow());
ipcMain.on("clear", (event, _) => {
  store.clear();
  store.set("index", 0);
  setWindowSize(mb.window);
  event.sender.send("read-from-clipboard", []);
});
ipcMain.on("quit", app.quit);

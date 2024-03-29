// Native
const { join } = require("path");
const { format } = require("url");

// Packages
const isDev = require("electron-is-dev");
const { clipboardWatcher } = require("./clipboard");
const { menubar: MENU_BAR } = require("menubar");
const { setWindowSizeAndVibrancy, APP_WIDTH } = require("../utils");

const url = isDev
  ? "http://localhost:8000/start"
  : format({
      pathname: join(__dirname, "../renderer/start.html"),
      protocol: "file:",
      slashes: true
    });

const menuBar = () =>
  MENU_BAR({
    index: url,
    icon: join(__dirname, "assets/icon.png"),
    browserWindow: {
      width: APP_WIDTH,
      resizable: false,
      transparent: true,
      webPreferences: {
        nodeIntegration: true,
        preload: join(__dirname, "preload.js")
      }
    }
  });

const onReady = store => () => {
  clipboardWatcher(store);
};

const onShow = (store, mb) => () => {
  let data = [];
  const index = store.get("index");
  for (let i = 0; i <= index - 1; i++) {
    data.push(store.get(`currentText-${i}`));
  }
  // mb.window.openDevTools()
  if (index === 0 || data.length === 0) {
    mb.window.setVibrancy("ultra-dark");
    return setWindowSizeAndVibrancy(mb.window, false, 0);
  } else {
    setWindowSizeAndVibrancy(mb.window, true, data.length);
    return mb.window.webContents.send("read-from-clipboard", data);
  }
};

module.exports = {
  menuBar,
  onReady,
  onShow
};

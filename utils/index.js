const APP_WIDTH = 300;
const LINE_HEIGHT = 30;
const PREFERENCES_HEIGHT = 130;
const DEFAULT_HEIGHT = LINE_HEIGHT + PREFERENCES_HEIGHT / 2;

const setWindowSize = (
  windowInstance,
  width = APP_WIDTH,
  height = DEFAULT_HEIGHT
) => windowInstance.setSize(width, height);

const setWindowSizeAndVibrancy = (windowInstance, hasData, dataLength) => {
  if (!hasData) {
    windowInstance.setVibrancy("ultra-dark");
    return setWindowSize(windowInstance, APP_WIDTH, DEFAULT_HEIGHT);
  }
  windowInstance.setVibrancy("dark");
  const appHeight =
    dataLength > 15
      ? LINE_HEIGHT * 15
      : LINE_HEIGHT * dataLength + PREFERENCES_HEIGHT;
  return setWindowSize(windowInstance, APP_WIDTH, appHeight);
};

module.exports = {
  APP_WIDTH,
  LINE_HEIGHT,
  PREFERENCES_HEIGHT,
  setWindowSizeAndVibrancy,
  setWindowSize
};

const { store } = require("./store");

const saveClipboardText = clipboardText => {
  let index = store.get("index");
  if (index === 40) return;
  store.set(`currentText-${index}`, clipboardText);
  store.set("index", (index += 1));
};

module.exports = {
  saveClipboardText
};

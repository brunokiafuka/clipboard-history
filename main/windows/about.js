const aboutWindow = require("about-window").default;
const { join } = require("path");

const openAboutWindow = () =>
  aboutWindow({
    icon_path: join(__dirname, "../assets/dock-icon.png"),
    copyright: "Copyright (c) 2019 Faustino Kialungila",
    package_json_dir: __dirname,
    resizable: false
    // open_devtools: process.env.NODE_ENV !== "production"
  });

module.exports = {
  openAboutWindow
};

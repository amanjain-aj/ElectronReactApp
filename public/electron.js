const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false
    }
  });

mainWindow.loadURL(
isDev
? "http://localhost:3000"
: url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes: true
})
);
mainWindow.maximize();
console.log("dddd",`file://${__dirname}/index.html")}`)
mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
if (process.platform !== "darwin") {
app.quit();
}
});
app.on("activate", () => {
if (mainWindow === null) {
createWindow();
}
});
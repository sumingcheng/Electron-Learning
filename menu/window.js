const { BrowserWindow } = require('electron')
const path = require('path')
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1600,
    y: 200,
    alwaysOnTop: true,
    webPreferences: {
      // nodeIntegration: true
      preload: path.resolve(__dirname, './preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.resolve(__dirname, './index.html'))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  return mainWindow
}

module.exports = {
  createWindow
}

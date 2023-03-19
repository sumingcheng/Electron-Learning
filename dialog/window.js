const { BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1500,
    y: 200,
    alwaysOnTop: true,
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false,
      // enableRemoteModule: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  })

  win.webContents.openDevTools()
  win.loadFile('index.html')
  return win
}

module.exports = {
  createWindow
}

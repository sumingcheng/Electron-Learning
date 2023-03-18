const { BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const main = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1600,
    y: 200,
    fullscreen: false,
    // 预加载脚本
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // 允许使用node
      // nodeIntegration: true,
      // 允许使用 contextIsolation
      // contextIsolation: true
    }
  })
  main.webContents.openDevTools()
  main.loadFile(path.resolve(__dirname, 'index.html'))
}

module.exports = {
  createWindow
}

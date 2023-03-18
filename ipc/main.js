const { BrowserWindow, app, ipcMain } = require('electron')
const path = require('path')
const { createMenu } = require('./menu/menu')
const createWindow = () => {
  const main = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1500,
    y: 200,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // 同意预加载脚本使用node
      nodeIntegration: true
    }
  })

  main.webContents.openDevTools({ mode: 'detach' })
  main.loadFile(path.resolve(__dirname, 'index.html'))
  createMenu(createWindow)
}

app.whenReady().then(() => {
  createWindow()
})
// 监听
ipcMain.on('saveFile', () => {
  console.log('saveFile')
})

ipcMain.handle('hello', () => {
  console.log('这是主进程的hello')
})

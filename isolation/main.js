const { app, ipcMain, BrowserWindow } = require('electron')
const { createWindow } = require('./window')

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('mainEvent', (arguments) => {
  console.log('Main', arguments)
})

ipcMain.on('changeSize', (event, options) => {
  // 获取当前窗口
  let win = BrowserWindow.fromWebContents(event.sender)
  console.log(options)
  // 设置窗口大小
  win.setBounds({ ...options }, true)
})

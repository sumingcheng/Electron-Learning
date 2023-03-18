const { createWindow } = require('./window')
const { app, BrowserWindow } = require('electron')
require('./menu')

app.whenReady().then(() => {
  createWindow()
})
// 处理苹果系统的dock图标点击事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

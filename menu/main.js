const { createWindow } = require('./window')
const { app, BrowserWindow } = require('electron')
const { CreateMenu } = require('./menu')
require('./contextMenu')


app.whenReady().then(() => {
  const win = createWindow()
  CreateMenu(win)
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

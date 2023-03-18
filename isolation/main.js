const { app, ipcMain } = require('electron')
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


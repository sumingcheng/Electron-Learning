const { app, ipcMain } = require("electron")
const { createWindow } = require("./window")
require("./menu.js")
require('./ipcMain.js')
app.whenReady().then(() => {
  const win = createWindow()
})

const { app, ipcMain } = require("electron")
const { createWindow } = require("./window")
require("./menu.js")

app.whenReady().then(() => {
  const win = createWindow()
})

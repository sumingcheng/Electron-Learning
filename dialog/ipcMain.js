const { ipcMain, dialog } = require("electron")
const fs = require('fs')
ipcMain.handle('selectFileMain', async () => {
  const { filePaths } = await dialog.showOpenDialog({
    title: '选择文件',
    properties: ['openFile', 'multiSelections'],
    filters: [
      {
        name: 'image', extensions: ['jpg', 'png', 'gif']
      }
    ]
  })
  return filePaths
})

ipcMain.on('saveFileMain', async (event, data) => {
  let { filePath } = await dialog.showSaveDialog({
    title: '保存文件',
  })
  fs.writeFileSync(filePath, data)
})
const { ipcMain, dialog } = require("electron")

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
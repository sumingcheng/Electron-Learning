const { ipcRenderer, contextBridge, ipcMain } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  selectFilePreload: () => {
    return ipcRenderer.invoke('selectFileMain')
  },
  saveFile: (data) => {
    return ipcRenderer.send('saveFileMain', data)
  }
})

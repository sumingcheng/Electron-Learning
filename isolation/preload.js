const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('apiKey', {
  toMain: (data) => {
    ipcRenderer.send('mainEvent', data)
  }
})

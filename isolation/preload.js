const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('apiKey', {
  toMain: (data) => {
    ipcRenderer.send('mainEvent', data)
  },
  onChangeSize: (data) => {
    let { width, height } = data
    ipcRenderer.send('changeSize', { width: parseInt(width), height: parseInt(height) })
  }
})

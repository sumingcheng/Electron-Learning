const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  renderer: (cb) => {
    ipcRenderer.on('electron', (event, value) => {
      cb(value)
    })
  }
})


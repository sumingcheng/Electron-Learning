const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  renderer: (cb) => {
    ipcRenderer.on('electron', (event, value) => {
      cb(value)
    })
  }
})

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  ipcRenderer.send('mainMenu', 'mainMenu')
})

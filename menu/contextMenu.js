const { ipcMain, Menu, BrowserWindow } = require('electron')


ipcMain.on('mainMenu', (event, value) => {
  const template = [
    {
      label: '退出',
      click: () => {
        console.log('退出')
      }
    }, {
      label: '打开',
    },
    {
      label: '帮助',
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  menu.popup(BrowserWindow.fromWebContents(event.sender))
})


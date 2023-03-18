const { app, Menu, BrowserWindow } = require('electron')
const isMac = process.platform === 'darwin'
const config = [
  ...(isMac ? [{
    label: app.name,
    submenu: [{
      label: '访问网站',
      click: async () => {
        const { shell } = require('electron')
        await shell.openExternal('https://www.baidu.com')
      }
    }]
  }] : []),
  {
    label: '操作',
    submenu: [
      {
        label: '打开',
        click: async () => {
          new BrowserWindow({
            width: 300,
            height: 300,
          })
        }
      }
    ]
  },
  {
    label: '帮助',
    submenu: [{
      label: '组1',
    }, {
      label: '组2',
    }, {
      type: 'separator'
    }, {
      label: '组3',
    }]
  },
  {
    label: '退出',
    click: async () => {
      // 如果是MAC系统，点击退出时，不退出应用
      isMac ? app.hide() : app.quit()
    }
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(config))

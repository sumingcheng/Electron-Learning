const { Menu, app, dialog } = require("electron")

const template = [
  {
    label: app.name,
    submenu: [
      {
        label: '打印',
        click: () => {
          console.log('打印')
        }
      },
      {
        label: '退出',
        click: async () => {
          const res = await dialog.showMessageBox({
            type: 'info',
            title: '退出',
            buttons: ['取消', '确定'],
            // 默认ID
            cancelId: 1,
          })
          if (res.response === 1) {
            app.quit()
          }
          console.log('退出')
        }
      }
    ]
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

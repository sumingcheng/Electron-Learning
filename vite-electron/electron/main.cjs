// Electron 的主文件默认必须是 CommonJS (CJS) 模块格式，即文件扩展名为 `.cjs`。

const { BrowserWindow, app } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1300,
    y: 100,
    alwaysOnTop: true,
  })
  mainWindow.loadURL('http://127.0.0.1:5173/')
}

app.whenReady().then(() => {
  // 点击任务栏再次打开窗口
  createWindow()
})

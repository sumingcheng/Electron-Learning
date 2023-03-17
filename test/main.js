const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1300,
    y: 100,
    alwaysOnTop: true,
    // 隐藏标题栏
    frame: false,
    // 窗口背景设置为透明
    transparent: true,
  })

  mainWindow.setAspectRatio(1)
  // 加载本地HTML
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  // 启动窗口的时候打开开发者工具
  mainWindow.webContents.toggleDevTools()
}
app.whenReady().then(() => {
  // 点击任务栏再次打开窗口
  createWindow()
})
// 检测窗口全部关闭
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
// 再次点击窗口的时候激活
app.on('activate', () => {
  // 点击任务栏再次打开窗口
  createWindow()
})

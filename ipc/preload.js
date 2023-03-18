const { ipcRenderer, contextBridge } = require('electron')
// const fs = require('fs')
//
// const content = fs.readFileSync('package.json', 'utf-8')
// console.log(content)
//

// 建议放到渲染进程
// window.addEventListener("DOMContentLoaded",()=>{
//   console.log(document.querySelector('h1'))
// })
// 发送
ipcRenderer.send('saveFile')
// 暴露可以被渲染进程访问的变量
contextBridge.exposeInMainWorld('api', {
  a: '111',
})

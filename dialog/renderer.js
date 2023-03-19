window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('#selectBtn')
  btn.addEventListener('click', async () => {
    const res = await window.electron.selectFilePreload()
    const container = document.querySelector('#container')
    // 循环遍历文件路径
    for (let i = 0; i < res.length; i++) {
      const input = document.createElement('input')
      input.value = res[i]
      container.appendChild(input)
    }
  })
})

// 保存文件
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('#J_Save')
  const textarea = document.querySelector('[name="textarea"]')
  btn.addEventListener('click', async () => {
    window.electron.saveFile(textarea.value)
  })
})
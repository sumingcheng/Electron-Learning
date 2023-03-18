window.addEventListener('DOMContentLoaded', () => {
  // const btn = document.querySelector('#app')
  //
  // btn.addEventListener('click', () => {
  //   window.apiKey.toMain('Hello')
  // })

  const btn = document.querySelector('#confirm'),
      width = document.querySelector('#width'),
      height = document.querySelector('#height')
  btn.addEventListener('click', () => {
    window.apiKey.onChangeSize({
      width: width.value,
      height: height.value
    })
  })
})

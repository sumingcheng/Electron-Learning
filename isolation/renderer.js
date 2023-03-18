window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#app')

  btn.addEventListener('click', () => {
    window.apiKey.toMain('Hello')
  })
})

window.electron.renderer((value) => {
  document.querySelector('h1').innerHTML = value
  console.log(value)
})

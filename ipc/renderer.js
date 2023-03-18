// 访问暴露的变量
const app = document.getElementById('app')

app.addEventListener('click', function () {
  window.api.hello()
})

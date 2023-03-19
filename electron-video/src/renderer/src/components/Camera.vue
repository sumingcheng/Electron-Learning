<script setup lang="ts">

import { onMounted } from 'vue'

// 获取摄像头
onMounted(() => {
  const constraints = {
    video: true,
    audio: false
  }
  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream
      video.play()
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <main class="w-screen h-screen flex">
    <video class="object-cover"></video>
  </main>
</template>



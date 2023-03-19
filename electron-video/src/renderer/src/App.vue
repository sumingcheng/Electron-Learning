<script setup lang="ts">
import Camear from './components/Camera.vue'
</script>

<template>
  <Suspense>
    <main>
      <Camear></Camear>
    </main>
  </Suspense>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>

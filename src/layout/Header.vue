<script setup lang="ts">
defineOptions({
  name: "Header",
})
</script>

<template>
  <div class="header flex fixed items-center top-0 left-0 bg-white w-full">
    <router-link to="/home" class="flex items-center">
      <img src="/logo.png" alt="logo" class="h-12 ml-4" />
      <span class="ml-2">Evan_Sky</span>
    </router-link>
    <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center flex-1">
      <a-link to="/home">首页</a-link>
      <a-link to="/components">Components</a-link>
      <a-link to="/vueuse">vueUse</a-link>
      <a-link to="/vueDraggable">vueDraggable</a-link>
      <a-link to="/licensePlateInput">licensePlateInput</a-link>
      <a-link to="/playground">演练场</a-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>

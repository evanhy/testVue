<script setup lang="ts">
defineOptions({
  name: "Header",
})
</script>

<template>
  <div class="header">
    <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center">
      <a-link to="/">首页</a-link>
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
  background-color: transparent;
}
</style>

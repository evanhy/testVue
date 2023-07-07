<script setup lang="ts">
import Header from "./header.vue"
defineOptions({
  name: "EvanLayout",
})
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import Header from "./Header.vue"
defineOptions({
  name: "EvanLayout",
})
</script>

<template>
  <div class="pt-12">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
defineOptions({
  name: "ALink",
})

defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <router-link class="font-medium text-gray-500 hover:text-red-500 flex items-center" :to="to" exact>
    <slot></slot>
  </router-link>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
  border-bottom: 2px solid red;
  transition: border 0.2s ease-in-out;
}
</style>

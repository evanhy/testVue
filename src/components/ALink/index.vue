<script lang="ts" setup>
defineOptions({
  name: "ALink",
})

const route = useRoute()
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <router-link
    :class="[
      'font-medium text-gray-500 hover:text-red-500 flex items-center',
      {
        'router-link-exact-active': route.path.includes(to),
      },
    ]"
    :to="to"
    exact
  >
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

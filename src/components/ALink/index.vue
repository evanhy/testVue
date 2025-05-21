<script lang="ts" setup>
defineOptions({
  name: "ALink",
});

const route = useRoute();
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link
    :class="[
      'relative font-medium text-secondary-600 hover:text-primary-600 flex items-center py-2 px-1 transition-all duration-300 ease-in-out',
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

<style lang="scss" scoped>
@import "@/styles/base.scss";

.router-link-exact-active {
  color: $primary-color;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: $primary-color;
    transition: transform $transition-fast, opacity $transition-fast;
    transform-origin: left center;
  }
}

a {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: $primary-color;
    transition: transform $transition-fast, opacity $transition-fast;
    transform: scaleX(0);
    transform-origin: left center;
    opacity: 0;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>

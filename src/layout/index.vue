<script lang="ts" setup>
import Header from "./Header.vue";

defineOptions({
  name: "EvanLayout",
});
</script>

<template>
  <div class="layout-container">
    <Header></Header>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.layout-container {
  min-height: 100vh;
  background-color: var(--neutral-50);
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--header-height);
  padding-left: var(--page-padding);
  padding-right: var(--page-padding);
  padding-bottom: var(--page-padding);
  width: 100%;
  margin: 0 auto;
  max-width: var(--content-max-width);
  transition: padding var(--transition-normal);
}

// 渐入渐出动画
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

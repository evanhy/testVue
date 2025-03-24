<script lang="ts" setup>
import Header from "./Header.vue";

defineOptions({
  name: "EvanLayout",
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header></Header>
    <main class="flex-1 pt-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
// 使用全局变量
@import "@/css/base.scss";

// 添加一些全局布局样式
:deep(.el-menu) {
  border-right: none !important;
}
</style>

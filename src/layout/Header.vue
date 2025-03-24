<script lang="ts" setup>
defineOptions({
  name: "Header",
});
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-custom">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <div class="flex items-center">
        <router-link class="flex items-center group" to="/home">
          <img
            alt="logo"
            class="h-10 w-10 transition-all duration-300 group-hover:scale-110"
            src="/logo.png"
          />
          <span
            class="ml-2 font-semibold text-lg text-primary-600 group-hover:text-primary-700 transition-colors duration-300"
            >Evan_Sky</span
          >
        </router-link>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        <a-link to="/home">首页</a-link>
        <a-link to="/components">Components</a-link>
        <a-link to="/vueuse">vueUse</a-link>
        <a-link to="/vueDraggable">vueDraggable</a-link>
        <a-link to="/playground">演练场</a-link>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="md:hidden">
        <el-dropdown trigger="click">
          <el-button
            type="primary"
            icon="el-icon-menu"
            class="menu-button"
            circle
          ></el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/home">首页</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/components">Components</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/vueuse">vueUse</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/vueDraggable">vueDraggable</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/playground">演练场</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/css/base.scss";

.menu-button {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.el-dropdown-menu__item) {
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }
}
</style>

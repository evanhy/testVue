<script lang="ts" setup>
defineOptions({
  name: "Header",
});

// 导航链接
const navLinks = [
  { path: "/home", label: "首页" },
  { path: "/components", label: "Components" },
  { path: "/vueuse", label: "vueUse" },
  { path: "/vueDraggable", label: "vueDraggable" },
  { path: "/playground", label: "演练场" },
];
</script>

<template>
  <header class="site-header">
    <nav class="header-nav">
      <div class="header-logo">
        <router-link class="logo-link" to="/home">
          <img alt="logo" class="logo-image" src="/logo.png" />
          <span class="logo-text">Evan_Sky</span>
        </router-link>
      </div>

      <div class="main-nav">
        <router-link
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ item.label }}
        </router-link>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu">
        <el-dropdown trigger="click">
          <el-button type="primary" class="menu-button" circle>
            <el-icon><menu /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in navLinks" :key="item.path">
                <router-link :to="item.path">{{ item.label }}</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: map-get($z-index, "fixed");
  height: var(--header-height);
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-light);
  transition: box-shadow var(--transition-normal),
    background-color var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-medium);
  }
}

.header-nav {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform var(--transition-fast);

  &:hover {
    .logo-image {
      transform: scale(1.05);
    }

    .logo-text {
      color: var(--primary-700);
    }
  }

  &:active {
    transform: scale(0.98);
  }
}

.logo-image {
  height: 2.5rem;
  width: auto;
  transition: transform var(--transition-normal);
}

.logo-text {
  margin-left: 0.75rem;
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--primary-600);
  transition: color var(--transition-fast);
}

.main-nav {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}

.nav-link {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--neutral-700);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color var(--transition-fast);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-600);
    transition: width var(--transition-normal);
  }

  &:hover {
    color: var(--primary-700);

    &::after {
      width: 30%;
    }
  }

  &.nav-link-active {
    color: var(--primary-600);
    font-weight: 600;

    &::after {
      width: 100%;
    }
  }
}

.mobile-menu {
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  .menu-button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .el-icon {
      font-size: 1.25rem;
    }
  }
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

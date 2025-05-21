<script setup lang="ts">
import { ref, onMounted } from "vue";
import { InfoFilled } from "@element-plus/icons-vue";
import gsap from "gsap";

defineOptions({
  name: "HomePage",
});

// 导航链接
const navLinks = [
  { path: "/components", label: "Components" },
  { path: "/vueuse", label: "vueUse" },
  { path: "/vueDraggable", label: "vueDraggable" },
  { path: "/playground", label: "演练场" },
];

// 为动画设置refs
const titleRef = ref(null);
const avatarRef = ref(null);
const infoCardRef = ref(null);
const navSectionRef = ref(null);

onMounted(() => {
  console.log(import.meta.env);

  // 执行页面加载动画
  runEntranceAnimations();
});

// GSAP动画
const runEntranceAnimations = () => {
  // 初始状态
  gsap.set(".main-title", { opacity: 0, y: -50 });
  gsap.set(".subtitle", { opacity: 0, y: 30 });
  gsap.set(".avatar-wrapper", { opacity: 0, scale: 0.8 });
  gsap.set(".info-card", { opacity: 0, y: 50 });
  gsap.set(".nav-link", { opacity: 0, y: 20, stagger: 0.1 });
  gsap.set(".nav-title", { opacity: 0 });
  gsap.set(".decoration-circle", { scale: 0, opacity: 0 });

  // 创建动画时间线
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 添加动画序列
  tl.to(".decoration-circle", {
    duration: 1.5,
    scale: 1,
    opacity: 0.15,
    stagger: 0.2,
    ease: "elastic.out(1, 0.5)",
  })
    .to(
      ".main-title",
      {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "elastic.out(1, 0.5)",
      },
      "-=1"
    )
    .to(
      ".subtitle",
      {
        duration: 0.8,
        opacity: 0.8,
        y: 0,
        ease: "power2.out",
      },
      "-=0.9"
    )
    .to(
      ".avatar-wrapper",
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)",
      },
      "-=0.7"
    )
    .to(
      ".info-card",
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=0.5"
    )
    .to(
      ".nav-title",
      {
        duration: 0.6,
        opacity: 1,
      },
      "-=0.3"
    )
    .to(
      ".nav-link",
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.1,
      },
      "-=0.4"
    );

  // 添加悬停动画
  setupHoverAnimations();
};

// 悬停动画效果
const setupHoverAnimations = () => {
  // 标题悬停效果
  gsap.utils.toArray(".title-container").forEach((element: any) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(".title-glow", {
        duration: 0.4,
        opacity: 0.9,
        filter: "blur(40px)",
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(".title-glow", {
        duration: 0.6,
        opacity: 0.6,
        filter: "blur(30px)",
        ease: "power2.out",
      });
    });
  });

  // 卡片悬停效果增强
  gsap.utils.toArray(".info-card").forEach((card: any) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -12,
        boxShadow:
          "0 22px 60px rgba(0, 0, 0, 0.4), 0 0 35px rgba(129, 140, 248, 0.35)",
        borderColor: "rgba(168, 85, 247, 0.5)",
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".icon-container"), {
        duration: 0.4,
        backgroundColor: "rgba(129, 140, 248, 0.25)",
        scale: 1.15,
        rotate: 5,
        ease: "back.out",
      });

      gsap.to(card.querySelector(".card-body"), {
        duration: 0.3,
        backgroundColor: "rgba(35, 45, 65, 0.6)",
        ease: "power2.inOut",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.5,
        y: 0,
        boxShadow:
          "0 15px 45px rgba(0, 0, 0, 0.3), 0 0 25px rgba(129, 140, 248, 0.2)",
        borderColor: "rgba(168, 85, 247, 0.2)",
        ease: "power2.out",
      });

      gsap.to(card.querySelector(".icon-container"), {
        duration: 0.4,
        backgroundColor: "rgba(129, 140, 248, 0.15)",
        scale: 1,
        rotate: 0,
        ease: "power2.inOut",
      });

      gsap.to(card.querySelector(".card-body"), {
        duration: 0.3,
        backgroundColor: "rgba(30, 41, 59, 0.6)",
        ease: "power2.inOut",
      });
    });
  });

  // 导航链接悬停效果
  gsap.utils.toArray(".nav-link").forEach((link: any) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        duration: 0.25,
        scale: 1.05,
        ease: "back.out(1.5)",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        duration: 0.25,
        scale: 1,
        ease: "power2.inOut",
      });
    });
  });
};
</script>

<template>
  <div class="home-container">
    <!-- 装饰圆圈 -->
    <div class="decoration-circle circle-1"></div>
    <div class="decoration-circle circle-2"></div>
    <div class="decoration-circle circle-3"></div>

    <div class="welcome-section">
      <!-- 欢迎区块 -->
      <div class="welcome-content">
        <div class="title-container" ref="titleRef">
          <div class="title-glow"></div>
          <h1 class="main-title">欢迎来到 Evan_Sky</h1>
          <p class="subtitle">探索现代化前端开发的无限可能</p>
        </div>
      </div>

      <!-- 头像区域 -->
      <div class="avatar-container">
        <div class="avatar-wrapper" ref="avatarRef">
          <div class="avatar-glow"></div>
          <a
            href="https://github.com/pan52yu"
            target="_blank"
            class="avatar-link"
          >
            <div class="avatar-frame">
              <el-avatar
                src="https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/20230223150133.png?x-oss-process=style/huyu"
                :size="160"
                class="avatar"
              ></el-avatar>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 信息卡片区域 -->
    <div class="info-section" ref="infoCardRef">
      <!-- 关于项目卡片 -->
      <div class="info-card">
        <div class="card-content">
          <div class="card-header">
            <div class="icon-container">
              <el-icon><InfoFilled /></el-icon>
            </div>
            <h2 class="card-title">关于项目</h2>
          </div>

          <div class="card-body">
            <p class="card-description">
              此项目是一个现代化的Vue3项目模板，集成了：
            </p>
            <ul class="feature-list">
              <li class="feature-item">
                <div class="feature-dot"></div>
                <span>Vue 3 + TypeScript</span>
              </li>
              <li class="feature-item">
                <div class="feature-dot"></div>
                <span>Vite 构建工具</span>
              </li>
              <li class="feature-item">
                <div class="feature-dot"></div>
                <span>Element Plus UI库</span>
              </li>
              <li class="feature-item">
                <div class="feature-dot"></div>
                <span>Tailwind CSS + SCSS</span>
              </li>
              <li class="feature-item">
                <div class="feature-dot"></div>
                <span>Vue Router</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 快捷操作区 -->
    <div class="nav-section" ref="navSectionRef">
      <h3 class="nav-title">开始探索更多功能</h3>
      <div class="nav-links">
        <router-link
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/base.scss";

// 主容器
.home-container {
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 5rem;
  position: relative;
  z-index: 10;
  overflow: hidden;
  min-height: calc(100vh - 6rem);
}

// 装饰元素
.decoration-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  z-index: -1;
  will-change: transform;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  top: -50px;
  right: -80px;
  opacity: 0.15;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #60a5fa, #34d399);
  bottom: 10%;
  left: -200px;
  opacity: 0.1;
}

.circle-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #f472b6, #f97316);
  top: 40%;
  right: 10%;
  opacity: 0.07;
}

// 欢迎区块
.welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  position: relative;
}

.welcome-content {
  text-align: center;
  margin-bottom: 3.5rem;
}

.title-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.title-glow {
  position: absolute;
  top: -20px;
  left: -30px;
  right: -30px;
  bottom: -20px;
  border-radius: 9999px;
  background: linear-gradient(
    to right,
    rgba(129, 140, 248, 0.7),
    rgba(168, 85, 247, 0.7)
  );
  filter: blur(30px);
  opacity: 0.6;
  z-index: 0;
  will-change: filter, opacity;
}

.main-title {
  position: relative;
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(to right, #818cf8, #c084fc, #60a5fa);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  z-index: 1;
  letter-spacing: -0.025em;
  text-shadow: 0 0 30px rgba(129, 140, 248, 0.3);
  will-change: transform, opacity;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
}

// 头像区域
.avatar-container {
  margin-bottom: 2.5rem;
  position: relative;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  will-change: transform, opacity;
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  border-radius: 50%;
  opacity: 0.8;
  filter: blur(20px);
  transition: opacity 0.4s ease, filter 0.4s ease;
  will-change: filter, opacity;

  &:hover {
    opacity: 1;
    filter: blur(25px);
  }
}

.avatar-link {
  position: relative;
  display: block;
  z-index: 1;
}

.avatar-frame {
  padding: 6px;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.avatar {
  border-radius: 50%;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.25);
  will-change: transform, box-shadow;
  border: 3px solid rgba(129, 140, 248, 0.3);

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 12px 45px rgba(129, 140, 248, 0.5);
  }
}

// 信息区块
.info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
}

.info-card {
  background: rgba(15, 23, 42, 0.6);
  background-image: linear-gradient(
    to bottom right,
    rgba(30, 41, 59, 0.8),
    rgba(15, 23, 42, 0.4)
  );
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3), 0 0 25px rgba(129, 140, 248, 0.2);
  backdrop-filter: blur(15px);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease;
  will-change: transform, box-shadow, border-color;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(129, 140, 248, 0.3),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.4),
      0 0 35px rgba(129, 140, 248, 0.35);
    border-color: rgba(168, 85, 247, 0.5);

    &::before {
      opacity: 1;
    }
  }
}

.card-content {
  padding: 2rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.75rem;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(129, 140, 248, 0.15);
  border-radius: 1rem;
  border: 1px solid rgba(129, 140, 248, 0.4);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  will-change: transform, background-color;
  transition: transform 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease;

  .el-icon {
    font-size: 1.75rem;
    color: rgba(129, 140, 248, 0.9);
    filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.5));
  }
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 0 20px rgba(129, 140, 248, 0.25);
  letter-spacing: -0.01em;
}

.card-body {
  background: rgba(30, 41, 59, 0.6);
  border-radius: 1rem;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s ease;
}

.card-description {
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 500;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 450;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
}

.feature-dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  box-shadow: 0 0 12px rgba(129, 140, 248, 0.6);
}

// 导航区块
.nav-section {
  text-align: center;
  margin-top: 1rem;
  position: relative;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-shadow: 0 0 15px rgba(129, 140, 248, 0.25);
  letter-spacing: -0.01em;
  will-change: opacity;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(129, 140, 248, 0.6),
      transparent
    );
    margin: 0.75rem auto 0;
  }
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
}

.nav-link {
  padding: 0.875rem 1.75rem;
  background-image: linear-gradient(
    to bottom right,
    rgba(30, 41, 59, 0.7),
    rgba(15, 23, 42, 0.5)
  );
  border: 1.5px solid rgba(129, 140, 248, 0.35);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.35s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  will-change: transform, box-shadow, background-color;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background-image: linear-gradient(
      to bottom right,
      rgba(129, 140, 248, 0.2),
      rgba(168, 85, 247, 0.15)
    );
    color: rgba(255, 255, 255, 1);
    border-color: rgba(129, 140, 248, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(129, 140, 248, 0.3);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(129, 140, 248, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

// 响应式适配
@media (max-width: 640px) {
  .home-container {
    padding: 3rem 1rem;
    gap: 4rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-body {
    padding: 1.5rem;
  }

  .icon-container {
    width: 3rem;
    height: 3rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .decoration-circle {
    opacity: 0.1;
    filter: blur(60px);
  }
}

:deep(.el-collapse) {
  --el-collapse-header-bg-color: rgba(15, 23, 42, 0.6);
  --el-collapse-header-text-color: rgba(129, 140, 248, 0.9);
  --el-collapse-header-font-size: 1.1rem;
  --el-collapse-content-bg-color: rgba(15, 23, 42, 0.6);

  .el-collapse-item__header {
    padding: 1.25rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(129, 140, 248, 0.15);
    }
  }

  .el-collapse-item__wrap {
    border-bottom: none;
  }
}
</style>

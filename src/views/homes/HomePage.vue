<script setup lang="ts">
import { useUserStore } from "@/store/user";
// import { testRequest } from "@/api/login"

defineOptions({
  name: "HomePage",
});

const userStore = useUserStore();
const editName = async () => {
  userStore.updateName("userName");
  //   const res = await testRequest()
};
const activeNames = ref("0");

onMounted(() => {
  console.log(import.meta.env);
});
</script>

<template>
  <div class="py-10 px-4 sm:px-6 lg:px-8">
    <div class="card max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-secondary-800 mb-4">
          欢迎来到 Evan_Sky
        </h1>
        <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
          现代化的 Vue3 项目模板，集成了 Element Plus、Tailwind CSS、SCSS
          等技术栈
        </p>
      </div>

      <div class="text-center mb-10">
        <a
          href="https://github.com/pan52yu"
          target="_blank"
          class="inline-block transform transition-transform hover:scale-105 duration-300"
        >
          <el-avatar
            src="https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/20230223150133.png?x-oss-process=style/huyu"
            :size="150"
            class="shadow-lg border-4 border-white hover:border-primary-100 transition-all duration-300"
          ></el-avatar>
        </a>
      </div>

      <div class="max-w-2xl mx-auto">
        <el-collapse
          class="border rounded-lg overflow-hidden"
          v-model="activeNames"
        >
          <el-collapse-item title="Pinia数据持久化" name="1">
            <div class="p-4 bg-gray-50 rounded-lg">
              <p class="text-2xl font-medium text-center mb-4">
                当前用户名: {{ userStore.name }}
              </p>
              <div class="flex justify-center">
                <el-button
                  type="primary"
                  @click="editName"
                  class="transition-all duration-300 hover:shadow-md"
                >
                  修改用户名
                </el-button>
              </div>
            </div>
          </el-collapse-item>

          <el-collapse-item title="关于项目" name="2">
            <div class="p-4 space-y-3 text-secondary-700">
              <p>此项目是一个现代化的Vue3项目模板，集成了：</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Vue 3 + TypeScript</li>
                <li>Vite 构建工具</li>
                <li>Element Plus UI库</li>
                <li>Tailwind CSS + SCSS</li>
                <li>Pinia 状态管理</li>
                <li>Vue Router</li>
              </ul>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/base.scss";

:deep(.el-avatar) {
  z-index: 10;
}

:deep(.el-collapse) {
  --el-collapse-header-bg-color: white;
  --el-collapse-header-text-color: var(--primary);
  --el-collapse-header-font-size: 1.1rem;
  --el-collapse-content-bg-color: white;

  .el-collapse-item__header {
    padding: 1rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    &:hover {
      background-color: rgba(59, 130, 246, 0.05);
    }
  }

  .el-collapse-item__wrap {
    border-bottom: none;
  }
}

.card {
  transition: transform $transition-normal, box-shadow $transition-normal;

  &:hover {
    box-shadow: $shadow-lg;
  }
}
</style>

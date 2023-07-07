<script setup lang="ts">
import { useUserStore } from "@/store/user"
// import { testRequest } from "@/api/login"

defineOptions({
  name: "HomePage",
})

const userStore = useUserStore()
const editName = async () => {
  userStore.updateName("userName")
  //   const res = await testRequest()
}
const activeNames = ref("0")

onMounted(() => {
  console.log(import.meta.env)
})
</script>

<template>
  <div class="home-page p-8 my-0 mx-auto font-mono text-center">
    <h2 class="text-4xl leading-relaxed font-bold">首页</h2>
    <a href="https://github.com/pan52yu" target="_blank">
      <el-avatar src="https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/20230223150133.png?x-oss-process=style/huyu" :size="'large'"></el-avatar>
    </a>
    <el-collapse class="w-6/12 m-auto" v-model="activeNames">
      <el-collapse-item title="Pinia数据持久化" name="1">
        <p class="text-2xl mb-1">{{ userStore.name }}</p>
        <el-button type="info" @click="editName">修改</el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;

  .el-avatar {
    width: 150px;
    height: 150px;
    cursor: pointer;
    z-index: 10;
  }
}
</style>

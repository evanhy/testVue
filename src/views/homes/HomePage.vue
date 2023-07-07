<script setup lang="ts">
import { useUserStore } from "@/store/user"
import { testRequest } from "@/api/login"

defineOptions({
  name: "HomePage",
})

const userStore = useUserStore()
const editName = async () => {
  userStore.updateName("userName")
  const res = await testRequest()
  console.log("🚀 ~ file:HomePage line:21 >>>", res)
}
const activeNames = ref("0")

onMounted(() => {
  console.log(import.meta.env)
})
</script>

<template>
  <div class="home-page p-8 my-0 mx-auto font-mono text-center">
    <h2 class="text-4xl leading-relaxed font-bold">首页</h2>
    <el-avatar src="https://huyu-blog.oss-cn-hangzhou.aliyuncs.com/img/20230223150133.png?x-oss-process=style/huyu" :size="'large'"></el-avatar>
    <el-divider></el-divider>
    <!--    <el-button class="mb-4" type="primary" @click="goComponent('clock')">查看时钟</el-button>-->
    <el-collapse class="w-6/12 m-auto" v-model="activeNames">
      <el-collapse-item title="Pinia数据持久化" name="1">
        <p class="text-2xl mb-1">{{ userStore.name }}</p>
        <el-button type="info" @click="editName">修改</el-button>
      </el-collapse-item>
    </el-collapse>
    <div class="md:mx-auto relative bg-white overflow-hidden border-b">
      <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center">
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/clock" exact>查看时钟 </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/components" exact>Components </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/vueuse" exact>vueUse </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/vueDraggable" exact>vueDraggable </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/licensePlateInput" exact>licensePlateInput </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/playground" exact>演练场 </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/LeafletMap" exact>LeafletMap </router-link>
        <router-link class="font-medium text-gray-500 hover:text-gray-900 flex items-center" to="/markDown" exact>MarkDown </router-link>

        <!--<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">Log in</a>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;

  .el-avatar {
    width: 150px;
    height: 150px;
    transition: transform 0.3s ease-in-out; /* Add a transition for smooth animation */
    cursor: pointer;
  }

  .el-avatar:hover {
    animation: rotate 0.5s linear infinite;
  }
}
</style>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'HomePage',
})
const router = useRouter()
const goComponent = (url: string) => {
    router.push(`/${url}`)
}
const userStore = useUserStore()
const editName = () => {
    userStore.updateName('userName')
}
onMounted(() => {
    console.log(import.meta.env)
})
</script>

<template>
    <div class="home-page">
        <img
            class="logo"
            src="https://img2.baidu.com/it/u=1629479163,3719818209&fm=253&fmt=auto&app=138&f=JPEG?w=473&h=399"
            alt=""
        />
        <h1>首页</h1>
        <el-divider></el-divider>
        <el-button type="primary" @click="goComponent('clock')">查看时钟</el-button>
        <el-divider></el-divider>
        <h3>{{ userStore.name }} Test > Pinia数据持久化</h3>
        <el-button type="info" @click="editName">修改</el-button>
        <el-divider></el-divider>
        <el-button type="info" @click="goComponent('vueuse')">查看VueUse</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="info" @click="goComponent('echarts')">查看Echarts</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="info" @click="goComponent('proTable')">查看ProTable</el-button>
    </div>
</template>

<style lang="scss" scoped>
.home-page {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    .logo {
        width: 300px;
        height: 250px;
    }
}
</style>

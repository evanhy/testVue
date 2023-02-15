<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'HomePage',
})
const router = useRouter()
const goClock = () => {
    router.push('/clock')
}
const goVueUse = () => {
    router.push('/vueuse')
}
const goEcharts = () => {
    router.push('/echarts')

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
        <img class="logo"
            src="https://img2.baidu.com/it/u=1629479163,3719818209&fm=253&fmt=auto&app=138&f=JPEG?w=473&h=399"
            alt=""
        />
        <h1>HomePage</h1>
        <hr />
        <el-button type="primary" @click="goClock">查看时钟</el-button>
        <h3>{{ userStore.name }} Test > Pinia数据持久化</h3>
        <el-button type="info" @click="editName">修改</el-button>
        <p></p>
        <el-button type="info" @click="goVueUse">查看VueUse</el-button>
        <el-button type="info" @click="goEcharts">查看Echarts</el-button>
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

<script setup lang="ts">
import {useUserStore} from '@/store/user';
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {testRequest} from "@/api/login";

defineOptions({
    name: 'HomePage',
})
const router = useRouter()
const goComponent = (url: string) => {
    router.push(`/${url}`)
}
const userStore = useUserStore()
const editName = async () => {
    userStore.updateName('userName')
    const res = await testRequest()
    console.log("🚀 ~ file:HomePage line:21 >>>", res)
}
const activeNames = ref('0')

onMounted(() => {
    console.log(import.meta.env)
})
</script>

<template>
    <div class="home-page p-8 my-0 mx-auto font-mono text-center">
        <h2 class="text-4xl leading-relaxed font-bold">首页</h2>
        <img
            class="logo w-72 inline-block"
            src="https://img2.baidu.com/it/u=1629479163,3719818209&fm=253&fmt=auto&app=138&f=JPEG?w=473&h=399"
            alt=""
        />
        <el-divider></el-divider>
        <el-button class="mb-4" type="primary" @click="goComponent('clock')">查看时钟</el-button>
        <el-collapse class="w-6/12 m-auto" v-model="activeNames">
            <el-collapse-item title="Pinia数据持久化" name="1">
                <p class="text-2xl mb-1">{{ userStore.name }}</p>
                <el-button type="info" @click="editName">修改</el-button>
            </el-collapse-item>
        </el-collapse>
        <div class=" md:mx-auto relative bg-white overflow-hidden border-b">
            <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center ">
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center"
                   @click="goComponent('vueuse')">vueUse</a>
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center"
                   @click="goComponent('echarts')">Echarts</a>
                <a href="#" class="font-medium text-indigo-600 hover:text-gray-900 flex items-center"
                   @click="goComponent('proTable')">ChatGPT</a>
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center"
                   @click="goComponent('LeafletMap')">LeafletMap</a>
                <!--<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">Log in</a>-->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<template>
    <div>
        <el-button type="primary" @click="goBack" class="go-back">返回</el-button>
        我是echarts
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'echarts'
})
const router = useRouter()
const goBack = () => {
    router.push('/')
}
</script>

<style scoped>

</style>
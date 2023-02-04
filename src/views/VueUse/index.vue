<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
    name: 'VueUse',
})
const router = useRouter()
const goVueUse = (routerPath: string, link: string) => {
    router.push(routerPath)
    docLink.value = link
}
const goBack = () => {
    router.push('/')
}
const useList = [
    {
        name: 'vueMouse',
        routerPath: '/vueuse/useMouse',
        link: 'https://vueuse.org/core/useMouse/',
    },
    {
        name: 'vueDraggable',
        routerPath: '/vueuse/useDraggable',
        link: 'https://vueuse.org/core/useDraggable/',
    },
]
let docLink = ref('https://vueuse.org/')
</script>

<template>
    <div class="vue-use">
        <el-button type="primary" @click="goBack" class="go-back">返回</el-button>
        <div class="title">
            <h1>我是VueUse</h1>
            &nbsp;
            <a :href="docLink" target="_blank">查看文档</a>
        </div>
        <hr />
        <div class="body">
            <div class="body-left">
                <ul>
                    <li v-for="item in useList">
                        <el-button
                            @click="goVueUse(item.routerPath, item.link)"
                            :type="docLink === item.link ? 'primary' : 'info'"
                        >
                            {{ item.name }}
                        </el-button>
                    </li>
                </ul>
            </div>
            <div class="body-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vue-use {
    .go-back {
        position: relative;
        top: 30px;
        left: 50px;
    }
    .title {
        text-align: center;
    }
    .body {
        display: flex;
        &-left {
            width: 300px;
            li {
                margin-bottom: 5px;
            }
        }
        &-rigth {
            flex: 1;
        }
    }
}
::v-deep(.describe) {
    background: #eaddff;
    min-height: 50px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}
</style>

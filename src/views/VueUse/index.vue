<script lang="ts" setup>
import {useRouter} from 'vue-router';

defineOptions({
    name: 'VueUse',
})
const router = useRouter()
const goVueUse = (routerPath: string, link: string) => {
    router.push(routerPath)
    docLink.value = link
}
const useList = [
    {
        name: 'useMouse',
        routerPath: '/vueuse/useMouse',
        link: 'https://vueuse.org/core/useMouse/',
    },
    {
        name: 'useDraggable',
        routerPath: '/vueuse/useDraggable',
        link: 'https://vueuse.org/core/useDraggable/',
    },
    {
        name: 'onClickOutside',
        routerPath: '/vueuse/onClickOutside',
        link: 'https://vueuse.org/core/onClickOutside/',
    },
    {
        name: 'useFocusTrap',
        routerPath: '/vueuse/useFocusTrap',
        link: 'https://vueuse.org/integrations/useFocusTrap/',
    },
    {
        name: 'useStorage',
        routerPath: '/vueuse/useStorage',
        link: 'https://vueuse.org/core/useStorage/',
    },
]
let docLink = ref('https://vueuse.org/')
</script>

<template>
    <div class="vue-use">
        <div class="text-center py-3">
            <h1 class="text-4xl mb-3">VueUse</h1>
            &nbsp;
            <a :href="docLink" class="border-2 p-1.5 rounded-md inline-block hover:bg-blue-300 hover:text-white"
               target="_blank">查看文档</a>
        </div>
        <hr/>
        <div class="flex">
            <div class="w-52">
                <ul>
                    <li v-for="item in useList" class="mb-1">
                        <evan-button
                            :type="docLink === item.link ? 'primary' : 'gray'"
                            @click="goVueUse(item.routerPath, item.link)"
                        >
                            {{ item.name }}
                        </evan-button>
                    </li>
                </ul>
            </div>
            <div class="flex-1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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

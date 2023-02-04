<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
const input = useStorage('use-storage', 'useStorage')
</script>

<template>
    <div>
        <div class="describe">
            自动将 ref 同步到 localstorage!
            <br>
            useStorage 可以传递第三个参数 >>> sessionStorage 和 localStorage
            <br />
            拜托，真的超吊的！
        </div>
        <input v-model="input" />
    </div>
</template>

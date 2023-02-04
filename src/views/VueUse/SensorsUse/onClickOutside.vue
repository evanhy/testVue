<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const container = ref(null)
onClickOutside(container, () => alert('Good。最好在外面点击。'))
</script>

<template>
    <div>
        <div class="describe">当点击发生在一个元素之外时,进行检测。对下拉菜单或许很有用。</div>
        <p>嘿，这里有一些文字</p>
        <div class="container" ref="container">
            <p style="background: pink">点击这里没弹窗 ~</p>
        </div>
    </div>
</template>

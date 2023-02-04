<script lang="ts" setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { ref } from 'vue';

const container = ref(null)
const { hasFocus, activate, deactivate } = useFocusTrap(container)
const value = ref()
const txt = ref('')
const click = () => {
    txt.value += 'biu'
}
const release = () => {
    txt.value = ''
    deactivate()
}
const disable = () => {
    txt.value = '你被禁用了！'
    activate()
}
</script>

<template>
    <div style="max-width: 1000px">
        <div class="describe">
            <p>将键盘焦点锁定在一个特定的DOM元素上</p>
        </div>
        <button @click="disable">禁用</button>
        <div class="container" ref="container">
            <button tab-index="-1">你被困在这里了 ~ > 你只能点击灰色边框盒子中的内容</button>
            <el-input v-model="value" placeholder="放心的填写吧 ~ ">22</el-input>
            <button style="background: pink" @click="release">解除禁用</button>
        </div>
        <button @click="click" tab-index="-1">
            {{ hasFocus ? '你现在点击不了我了 ~' : '你现在可以点击我 ~' }}
        </button>
        <br />
        <button v-if="txt !== ''">
            {{ txt }}
        </button>
    </div>
</template>

<style scoped>
body {
    font-family: sans-serif;
}

button {
    margin: 8px 0;
    padding: 12px 16px;
    background: slategrey;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 4px;
}

button:focus {
    outline: skyblue solid 6 px;
}

.container {
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: 6px;
    margin: 16px 0;
    padding: 4px 8px;
}
</style>

<!-- <script lang="ts" setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { ref } from 'vue'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target)
</script>

<template>
    <div>
        <button @click="activate()">Activate</button>
        <div ref="target">
            <span>Has Focus: {{ hasFocus }}</span>
            <input type="text" />
            <button @click="deactivate()">Deactivate</button>
        </div>
    </div>
</template> -->

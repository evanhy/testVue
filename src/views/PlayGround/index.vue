<template>
  <div class="text-base">
    <h1 class="text-center text-4xl my-3">PlayGround</h1>
    <div class="bg-cyan-50 min-h-[300px]">      
      <p>图片预览</p>
      <img src="https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg" alt="" class="w-52 h-52 cursor-pointer" @click="showImg = true" />

      <div v-show="showImg" class="grid place-items-center w-[100vw] h-[100vh] fixed top-0 left-0 bg-black bg-opacity-50" @click.self="showImg = false">
        <img src="https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg" alt="" class="w-[80vw] h-[80vh] cursor-pointer" />
      </div>

      <p>自定义指令实现图片预览</p>
      <img src="https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg" v-image-preview alt="" class="w-52 h-52 cursor-pointer" />

      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>

defineOptions({
  name: "PlayGround",
})
const showImg = ref(false)
</script>

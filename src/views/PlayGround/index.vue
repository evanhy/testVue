<!-- <template>
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
</template> -->
<script lang="ts" setup>
import gsap from "gsap"
import GsapNumber from "./components/GsapNumber.vue"
defineOptions({
  name: "PlayGround",
})

onMounted(() => {
  // gsap.to(".box", {
  //   x: 200, // 移动距离
  //   duration: 3, // 动画持续时间
  //   ease: "power1.out", // 动画效果
  //   repeat: -1, // 重复次数 -1 为无限
  // })
  gsap.fromTo(
    ".box",
    {
      x: 0,
    },
    {
      x: 200,
      duration: 3,
      ease: "power1.out",
      repeat: -1,
      yoyo: true, // 反向动画
    }
  )
})
</script>

<template>
  <div class="p-5">
    <div class="box w-20 h-20 bg-pink-100 rounded"></div>
    <div class="grid grid-cols-4 gap-4 m-4">
      <div class="bg-blue-500">
        <GsapNumber :from="0" :to="290" />
      </div>
      <div class="bg-red-500">
        <GsapNumber :from="0" :to="11456" />
      </div>
      <div class="bg-pink-500">
        <GsapNumber :from="0" :to="367" />
      </div>
      <div class="bg-green-500">
        <GsapNumber :from="0" :to="56789" />
      </div>

      <div class="bg-blue-500">
        <GsapNumber :from="1230" :to="0" />
      </div>
      <div class="bg-red-500">
        <GsapNumber :from="30" :to="0" />
      </div>
      <div class="bg-pink-500">
        <GsapNumber :from="870" :to="0" />
      </div>
      <div class="bg-green-500">
        <GsapNumber :from="3404" :to="0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #fff;
}
</style>

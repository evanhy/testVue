<template>
  <div v-if="show" 
    class="image-viewer fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10" 
    @click="hide" 
    @wheel="onWheel"
  >
    <img class="max-w-[90%] max-h-[90%]" :src="src" alt="Preview" :style="imgStyle" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
})

// 控制显示
const show = ref(false)

// 缩放比例
const scale = ref(1)

// 最小缩放比例
const minScale = 0.5

// 最大缩放比例
const maxScale = 3

// 图片样式
const imgStyle = computed(() => {
  return {
    transform: `scale(${scale.value})`,
  }
})

// 隐藏
const hide = () => {
  show.value = false
  resetTransformations()
}

// 显示
const showImage = () => {
  show.value = true
}

// 重置缩放
const resetTransformations = () => {
  scale.value = 1
}

// 滚轮缩放
const onWheel = (e: WheelEvent) => {
  let newScale = scale.value
  newScale = e.deltaY > 0 ? newScale * 1.1 : newScale / 1.1
  scale.value = Math.min(maxScale, Math.max(minScale, newScale))
}

defineExpose({
  showImage,
})
</script>

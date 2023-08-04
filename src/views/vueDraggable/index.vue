<script setup lang="ts">
import draggable from "vuedraggable"
defineOptions({
  name: "vueDraggable",
})

const myArray = ref([
  {
    name: "Jean",
    id: 2,
  },
  {
    name: "Joao",
    id: 1,
  },
  {
    name: "John",
    id: 0,
  },
])

const drag = ref(false)
</script>
<template>
  <div class="p-3">
    <draggable class="flex" v-model="myArray" group="people" @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">
        <div class="p-3 bg-white cursor-move border-2 ml-1 rounded-lg hover:bg-blue-100" :class="{ 'opacity-50': drag }">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

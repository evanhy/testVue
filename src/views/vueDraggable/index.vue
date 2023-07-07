<template>
  <div class="itxst">
    <div class="group">
      <ul>
        <draggable
          :list="state.modules.group1"
          ghost-class="ghost"
          handle=".move"
          filter=".forbid"
          :force-fallback="true"
          chosen-class="chosenClass"
          animation="300"
          @start="onStart"
          @end="onEnd"
          group="group1"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          :move="onMove"
          :direction="'horizontal'"
        >
          <template #item="{ element }">
            <li>
              <div :class="element.disabledMove ? 'forbid item' : 'item'">
                <label class="move">{{ element.name }}</label>
                <p v-html="element.name === '消息' ? '消息不允许拖拽和停靠<br>www.itxst.com' : '内容....'"></p>
              </div>
            </li>
          </template>
        </draggable>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
//导入draggable组件
import { reactive } from "vue"
import draggable from "vuedraggable"

const state = reactive({
  /*工作台的数据结构
      disabledMove:禁止移动
      disabledPark:禁止停靠
    */
  modules: {
    group1: [
      { name: "消息", id: 1, disabledMove: false, disabledPark: false },
      { name: "订单", id: 5, disabledMove: false, disabledPark: false },
      { name: "审核", id: 9, disabledMove: false, disabledPark: false },
    ],
  },
})

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽")
}

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽")
}

const onMove = (e: any) => {
  //不允许停靠
  return e.relatedContext.element.disabledPark !== true
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  background-color: #f1f1f1;
}

.itxst {
  background-color: #f1f1f1;
  padding: 20px;
}

.group {
  display: flex;
  align-content: center;

  ::v-deep(div) {
    display: flex !important;
  }
}

.item {
  border: solid 1px #ddd;
  padding: 0;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  user-select: none;
}

.item > label {
  border-bottom: solid 1px #ddd;
  padding: 6px 10px;
  color: #333;
}

.item > label:hover {
  cursor: move;
}

.item > p {
  padding: 6px 10px;
  color: #666;
}

.ghost {
  //border: solid 1px rgb(19, 41, 239) !important;
}

.chosenClass {
  opacity: 1;
  //border: solid 1px red;
}

.fallbackClass {
  background-color: aquamarine;
}
</style>

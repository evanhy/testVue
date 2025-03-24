<script setup>
import * as echarts from "echarts";

defineOptions({
  name: "PlayGround",
});

const echartRef = ref();

onMounted(() => {
  const myChart = echarts.init(echartRef.value);

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
});
</script>

<template>
  <div ref="echartRef" style="width: 800px; height: 600px"></div>
</template>

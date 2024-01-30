<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";

import { GridComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([CanvasRenderer, LineChart, GridComponent]);

provide(THEME_KEY, "");

const option = ref({
  title: {
    text: "圖表標題(可省略)",
    left: "center",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  legend: {
    bottom: 10,
    data: ["Email", "Search Engine"],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        color: "#3fd1b5",
        shadowColor: "#3fd1b5",
      },
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [320, 400, 191, 234, 290, 330, 310],
      itemStyle: {
        color: "#32a7fa",
        shadowColor: "#32a7fa",
      },
      areaStyle: {},
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>

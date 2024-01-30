<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";

import { GridComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([CanvasRenderer, BarChart, GridComponent]);

provide(THEME_KEY, "");

const option = ref({
  title: {
    text: "圖表標題(可省略)",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },

  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  series: [
    {
      name: "Direct",
      type: "bar",
      stack: "total",
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 301, 334, 390, 330, 320],
      itemStyle: {
        color: "#0156a2",
        shadowColor: "#0156a2",
      },
    },
    {
      name: "Mail Ad",
      type: "bar",
      stack: "total",

      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        color: "#32a7fa",
        shadowColor: "#32a7fa",
      },
    },
    {
      name: "Affiliate Ad",
      type: "bar",
      stack: "total",

      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: {
        color: "#3fd1b5",
        shadowColor: "#3fd1b5",
      },
    },
    {
      name: "Video Ad",
      type: "bar",
      stack: "total",

      emphasis: {
        focus: "series",
      },
      data: [150, 212, 201, 154, 190, 330, 410],
      itemStyle: {
        color: "#405db2",
        shadowColor: "#405db2",
      },
    },
    {
      name: "Search Engine",
      type: "bar",
      stack: "total",

      emphasis: {
        focus: "series",
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
      itemStyle: {
        color: "#1c93d0",
        shadowColor: "#1c93d0",
      },
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>

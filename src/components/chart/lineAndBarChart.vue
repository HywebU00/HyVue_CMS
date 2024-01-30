<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([CanvasRenderer, BarChart, GridComponent, LineChart]);

provide(THEME_KEY, "");

const option = ref({
  title: {
    text: "圖表標題(可省略)",
    subtext: "圖表副標題(可省略)",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },

  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Precipitation",
      min: 0,
      max: 250,

      interval: 50,
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "Temperature",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",

      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
      // 设置单个柱子的样式
      itemStyle: {
        color: "#0156a2",
        shadowColor: "#0156a2",
      },
    },
    {
      name: "Precipitation",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
      // 设置单个柱子的样式
      itemStyle: {
        color: "#32a7fa",
        shadowColor: "#32a7fa",
      },
    },
    {
      name: "Temperature",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + " °C";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      itemStyle: {
        color: "#ff863a",
        shadowColor: "#ff863a",
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

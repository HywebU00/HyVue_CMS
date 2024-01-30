<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
]);

provide(THEME_KEY, "");

const option = ref({
  title: {
    text: "圖表標題(可省略)",

    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    bottom: 10,
    orient: "vertical",
    left: "right",
    data: ["CityA", "CityB", "CityD", "CityC", "CityE"],
  },
  series: [
    {
      type: "pie",
      radius: "75%",
      center: ["50%", "45%"],
      selectedMode: "single",
      data: [
        {
          value: 1548,
          name: "CityE",
          itemStyle: {
            color: "#0156a2",
            shadowColor: "#0156a2",
          },
        },
        {
          value: 735,
          name: "CityC",
          itemStyle: {
            color: "#32a7fa",
            shadowColor: "#32a7fa",
          },
        },
        {
          value: 510,
          name: "CityD",
          itemStyle: {
            color: "#3fd1b5",
            shadowColor: "#3fd1b5",
          },
        },
        {
          value: 434,
          name: "CityB",
          itemStyle: {
            color: "#405db2",
            shadowColor: "#405db2",
          },
        },
        {
          value: 335,
          name: "CityA",

          itemStyle: {
            color: "#1c93d0",
            shadowColor: "#1c93d0",
          },
        },
      ],
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
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

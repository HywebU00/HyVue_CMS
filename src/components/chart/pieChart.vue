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
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
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
        },
        { value: 735, name: "CityC" },
        { value: 510, name: "CityD" },
        { value: 434, name: "CityB" },
        { value: 335, name: "CityA" },
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

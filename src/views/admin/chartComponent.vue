<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>共通元素 - 圖表</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col md="8" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">AreaChart</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <areaChart /> </v-card
      ></v-col>
      <v-col md="4" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">Pie 圓餅圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <pieChart />
        </v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">長條圖+折線圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <lineAndBarChart />
        </v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">長條圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <barChart />
        </v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">Line 折線圖</h4>
          <v-divider class="pt-2 mb-2"></v-divider> <lineChart />
        </v-card>
      </v-col>
    </v-row>

    <div class="text-caption my-6 text-center">
      <v-divider class="pt-2 mb-2"></v-divider>
      相關圖表設定 請參考 echarts.js 套件
    </div>
  </v-container>
</template>

<script>
import pieChart from "@/components/chart/pieChart.vue";
import barChart from "@/components/chart/barChart.vue";
import areaChart from "@/components/chart/areaChart.vue";
import lineChart from "@/components/chart/lineChart.vue";
import lineAndBarChart from "@/components/chart/lineAndBarChart.vue";
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  components: {
    pieChart,
    barChart,
    areaChart,
    lineChart,
    lineAndBarChart,
  },
};
</script>

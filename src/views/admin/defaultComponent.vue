<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>系統首頁儀表板</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col sm="3" cols="12" v-for="item in countCards" :key="item.title">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">
            {{ item.title }}
          </h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <v-sheet rounded :color="item.bgColor" class="py-8">
            <div
              ref="countCard"
              style="color: #fff"
              class="text-h4 text-center font-weight-bold"
            >
              {{ item.num }}
            </div>
          </v-sheet>
          <div class="text-caption mt-2 text-end">
            <v-divider class=""></v-divider>
            時間以...為計算準
          </div>
        </v-card>
      </v-col>
      <v-col md="8" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">網站流量</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <lineAndBarChart /></v-card
      ></v-col>
      <v-col md="4" cols="12">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">數據分析</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          <pieChart />
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                今日熱門網頁
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <v-table density="compact">
                <thead class="bg-thead">
                  <tr>
                    <th class="text-left">序列</th>
                    <th class="text-left">標題</th>
                    <th class="text-left">瀏覽量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i">
                    <td>{{ i }}</td>
                    <td>大更沒於正時節直只們來壓算有先，求化化看雨的</td>
                    <td>1,523</td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">公告資訊</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <v-table density="compact">
                <thead class="bg-thead">
                  <tr>
                    <th class="text-left">序列</th>
                    <th class="text-left">標題</th>
                    <th class="text-left">發佈時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 5" :key="i">
                    <td>{{ i }}</td>
                    <td>過比你三觀不比想面發比望麼到發濟家飯年經產</td>
                    <td>2020/01/01</td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from "gsap";

import pieChart from "@/components/chart/pieChart.vue";
import lineAndBarChart from "@/components/chart/lineAndBarChart.vue";

export default {
  data: () => ({
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    countCards: [
      { title: "今日訪客人數", bgColor: "#ec8a87", num: 500 },
      { title: "待審資料", bgColor: "#f0bf4c", num: 320 },
      { title: "今日新增資料", bgColor: "#b3cb20", num: 1370 },
      { title: "今日訪客人數", bgColor: "#96a8d6", num: 348 },
    ],
  }),
  methods: {
    count(index, num = 200) {
      let th = this.$refs.countCard[index];
      let Numbs = { val: 0 },
        NewVal = num;
      gsap.to(Numbs, {
        val: NewVal,
        roundProps: "val",
        duration: 2,
        onUpdate: function () {
          th.innerHTML = Numbs.val;
        },
      });
    },
  },
  mounted() {
    this.countCards.forEach((item, index) => {
      this.count(index, item.num);
    });
  },
  components: {
    pieChart,
    lineAndBarChart,
  },
};
</script>

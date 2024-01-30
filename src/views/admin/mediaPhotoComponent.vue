<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>特殊範例頁面-多媒體資料庫</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <!-- tablet 卡片列 start -->
        <v-card class="mb-5">
          <div class="">
            <v-container class="container">
              <!-- 標籤列 start -->
              <v-row class="">
                <v-col cols="12" class="py-0"
                  ><div>
                    <v-chip-group v-model="selection">
                      <v-chip
                        v-for="item in 6"
                        :key="item"
                        color="primary"
                        link
                        label
                      >
                        標籤
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <v-divider class="my-2"></v-divider>
                </v-col>
                <v-col class="pb-0 justify-space-between d-flex" cols="12">
                  <v-menu transition="slide-y-transition">
                    <template>
                      <v-btn
                        variant="flat"
                        color="primary "
                        size="small"
                        prepend-icon="mdi-cog-outline"
                        v-bind="props"
                        >批次處理</v-btn
                      >
                    </template>
                    <v-card class="pa-2">
                      <v-btn
                        size="small"
                        variant="outlined"
                        class="my-1"
                        block
                        color="primary"
                        prepend-icon="mdi-delete"
                        >刪除</v-btn
                      >
                      <v-btn
                        size="small"
                        variant="outlined"
                        class="my-1"
                        block
                        prepend-icon="mdi-pencil"
                        color="primary"
                        >編輯</v-btn
                      >
                      <v-btn
                        size="small"
                        variant="outlined"
                        class="my-1"
                        block
                        color="primary"
                        prepend-icon="mdi-delete"
                        >設定</v-btn
                      >
                    </v-card>
                  </v-menu>
                  <v-btn
                    variant="flat"
                    color="primary "
                    size="small"
                    prepend-icon="mdi-plus"
                    >新增</v-btn
                  >
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
              <v-row>
                <v-col>
                  <v-divider class="mt-1 mb-3"></v-divider>
                </v-col>
              </v-row>
              <!-- tab start -->
              <v-row>
                <v-col cols="12" md="2">
                  <h4>資料夾分類</h4>

                  <v-btn
                    class="my-3"
                    size="small"
                    @click="all"
                    color="primary"
                    block
                  >
                    展開所有分類
                  </v-btn>
                  <!-- 手風琴元件 start -->
                  <v-expansion-panels
                    class="accordionMenu"
                    variant="accordion"
                    v-model="panel"
                  >
                    <v-expansion-panel
                      v-for="i in 3"
                      :key="i"
                      :value="`item${i}`"
                    >
                      <v-expansion-panel-title class="py-0" hide-actions>
                        <v-row no-gutters>
                          <v-col class="d-flex justify-start align-center">
                            <v-icon size="small" color="primary" class="mr-2"
                              >mdi-folder</v-icon
                            >分類 {{ i }}
                          </v-col>
                        </v-row>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <ul>
                          <li v-for="a in 6" :key="a">
                            - 分類 {{ i }} - {{ a }}
                          </li>
                        </ul>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  <!-- 手風琴元件 end -->
                  <h4 class="mt-4">分類標籤</h4>
                  <v-chip-group v-model="selection">
                    <v-chip
                      v-for="item in 10"
                      :key="item"
                      color="primary"
                      link
                      size="small"
                      label
                    >
                      標籤
                    </v-chip>
                  </v-chip-group>
                </v-col>
                <v-col cols="12" md="10">
                  <!-- 卡片列表 start -->
                  <v-container class="container px-0">
                    <v-row class="pa-0 mediaCardList">
                      <v-col
                        class="pa-1"
                        cols="3"
                        sm="2"
                        v-for="item in 2"
                        :key="item"
                      >
                        <v-card class="photoCard">
                          <div class="cardContainer">
                            <div class="img">
                              <v-label></v-label>
                              <v-checkbox
                                v-ripple.stop
                                class="checkbox"
                                color="light"
                                v-model="selected"
                                :value="item"
                              ></v-checkbox>
                              <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover
                              ></v-img>
                            </div>
                            <div class="info">
                              <v-card-item>
                                <v-card-title
                                  >檔案名稱檔案名稱檔案名稱</v-card-title
                                >
                              </v-card-item>
                            </div>
                          </div>
                        </v-card>
                      </v-col>
                      <v-col
                        cols="3"
                        sm="2"
                        class="pa-1"
                        v-for="item in 30"
                        :key="'num' + item"
                      >
                        <v-card class="photoCard">
                          <div class="cardContainer">
                            <div class="img">
                              <v-label></v-label>
                              <v-checkbox
                                v-ripple.stop
                                class="checkbox"
                                color="light"
                                v-model="selected"
                                :value="'num' + item"
                              ></v-checkbox>
                              <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover
                              ></v-img>
                            </div>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                  <!-- 卡片列表 end -->
                </v-col>
              </v-row>
              <!-- tab end -->
            </v-container>

            <!-- Pagination start -->
            <div class="text-center pb-5">
              <v-pagination
                v-model="page"
                :length="5"
                rounded="0"
                active-color="primary"
                color="primary"
                size="small"
              ></v-pagination>
            </div>
            <!-- Pagination end -->
          </div>
        </v-card>
        <!-- tablet 卡片列 end -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    selectedDate: null,
    selection: 1,
    selected: [],
    data: [
      {
        id: "1",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "2",
        top: true,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
      {
        id: "3",
        top: false,
        title: "大更沒於正時節直只們來壓算有先，求化化看雨的",
        class: "最新消息",
        dateStart: "2019/10/16",
        dateEnd: "2019/12/16",
        lang: "繁體中文",
        status: "待審",
      },
    ],
    //table serve
    panelOpen: false,
    panel: [],
  }),
  methods: {
    all() {
      this.panelOpen = !this.panelOpen;
      if (this.panelOpen) {
        this.panel = ["item1", "item2", "item3"];
      } else {
        this.panel = [""];
      }
    },
  },
};
</script>

<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>特殊範例頁面 - 網站總覽</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <!-- 卡片列start -->
    <v-card class="mb-5">
      <div>
        <v-container class="container">
          <!-- 標籤列 start -->
          <v-row>
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
            <v-col class="pb-0 justify-end d-flex" cols="12">
              <v-btn
                variant="flat"
                color="primary "
                size="small"
                class="mb-4"
                prepend-icon="mdi-plus"
                >新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="albumCardList mt-0">
            <v-col
              v-for="item in 10"
              :key="item"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
            >
              <v-card class="albumCard">
                <div class="cardContainer">
                  <v-img src="~@/assets/demo/01.jpg" cover></v-img>
                  <div class="info">
                    <v-card-item>
                      <v-card-title>資料標題</v-card-title>
                      <v-card-subtitle>負責人/科別</v-card-subtitle>
                      <p>資料內容記事資料內容記事資料內容記事...</p>
                    </v-card-item>
                    <v-card-text>
                      <v-row class="iconList">
                        <v-col>
                          <v-icon icon="mdi:mdi-clock" />
                          <span>112/03/27</span></v-col
                        >
                        <v-col class="d-flex justify-end">
                          <v-icon icon="mdi:mdi-eye" />
                          <span>112</span></v-col
                        >
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn variant="tonal" color="primary" block>
                        more
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
    <!-- 卡片列end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">分隔線</v-divider>

    <!-- 卡片列表 start -->
    <v-card class="mb-5">
      <div>
        <v-container class="container">
          <!-- 標籤列 start -->
          <v-row class="mb-1">
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
            <v-col class="pb-0 justify-end d-flex" cols="12">
              <v-btn variant="flat" color="primary " prepend-icon="mdi-plus"
                >新增</v-btn
              >
            </v-col>
          </v-row>
          <!-- 標籤列 end -->
          <v-row class="albumCardList list">
            <v-col
              v-for="item in 10"
              :key="item"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
            >
              <v-card class="albumCard">
                <div class="cardContainer">
                  <v-img src="~@/assets/demo/02.jpg" cover></v-img>
                  <div class="info">
                    <v-card-item>
                      <v-card-title>資料標題</v-card-title>
                      <v-card-subtitle>負責人/科別</v-card-subtitle>
                      <p>資料內容記事資料內容記事資料內容記事...</p>
                    </v-card-item>
                    <v-card-text>
                      <v-row class="iconList">
                        <v-col>
                          <v-icon icon="mdi:mdi-clock" />
                          <span>112/03/27</span></v-col
                        >
                        <v-col class="d-flex justify-end">
                          <v-icon icon="mdi:mdi-eye" />
                          <span>112</span></v-col
                        >
                      </v-row>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
    <!-- 卡片列表 end -->
    <v-card class="mb-5">
      <div class="">
        <v-container class="container">
          <v-row class="pa-4">
            <v-col
              class="px-1"
              v-for="item in 12"
              :key="item"
              cols="4"
              sm="4"
              md="3"
              lg="2"
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
                    <v-img src="~@/assets/demo/03.jpg" cover></v-img>
                  </div>
                  <div class="info">
                    <v-card-item>
                      <v-card-title>檔案名稱檔案名稱檔案名稱</v-card-title>
                    </v-card-item>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data

    listStyle: false,

    selected: [],
  }),

  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    removeIndexBg() {
      const hasImg = document
        .querySelector(".content")
        .classList.contains("mpImg");
      if (hasImg) {
        document.querySelector(".content").classList.remove("mpImg");
      } else {
        return;
      }
    },
  },
};
</script>

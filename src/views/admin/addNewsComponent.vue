<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>資料發布 / Editor版本</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col lg="10" cols="12">
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
              </v-row>
              <!-- 標籤列 end -->
              <!-- tab start -->
              <v-row>
                <v-col>
                  <v-tabs v-model="tab" color="primary">
                    <v-tab append-icon="mdi-pencil" value="one">頁籤ㄧ</v-tab>
                    <v-tab append-icon="mdi-pencil" value="two">頁籤二</v-tab>
                    <v-tab append-icon="mdi-pencil" value="three">頁籤三</v-tab>
                  </v-tabs>
                  <v-card-text>
                    <v-window v-model="tab">
                      <v-window-item value="one"> One </v-window-item>

                      <v-window-item value="two"> Two </v-window-item>

                      <v-window-item value="three"> Three </v-window-item>
                    </v-window>
                  </v-card-text>
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
      <v-col lg="2" cols="12">
        <v-card class="pa-2 mb-3">
          <h4 class="text-h7 text-primary font-weight-bold">單選核取表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pa-0"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="選項一" value="1"></v-radio>
                    <v-radio label="選項二" value="2"></v-radio>
                    <v-radio label="選項三" value="3"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-btn block color="primary">暫存</v-btn>
                </v-col>
                <v-col cols="" class="pb-0">
                  <v-btn block color="secondary">預覽</v-btn>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="">
                  <v-btn block class="bg-grey-darken-1">確定發布</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
        <v-card class="pa-2">
          <h4 class="text-h7 text-primary font-weight-bold">單選核取表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pa-0"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-text-field
                    single-line
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                    append-inner-icon="mdi-calendar"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3"></v-divider>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pa-0 mt-3"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-text-field
                    single-line
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                    append-inner-icon="mdi-calendar"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3"></v-divider>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pa-0 mt-3"
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    color="primary"
                  >
                    <v-radio label="立即" value="1"></v-radio>
                    <v-radio label="排程" value="2"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row>
                <v-divider class="mt-3"></v-divider>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="">
                  <v-text-field
                    single-line
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                    append-inner-icon="mdi-calendar"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
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
    panel: 1,
    selectedDate: null,
    selection: 1,
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
  }),
  methods: {},
};
</script>

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
                  <v-tabs v-model="tab" color="primary" grow>
                    <v-tab prepend-icon="mdi-pencil" value="one"
                      >內容編輯</v-tab
                    >
                    <v-tab prepend-icon="mdi-pencil" value="two"
                      >發布設定</v-tab
                    >
                    <v-tab prepend-icon="mdi-pencil" value="three"
                      >詮釋資料</v-tab
                    >
                  </v-tabs>
                  <v-card-text>
                    <v-window v-model="tab">
                      <v-window-item value="one">
                        <h4 class="text-h6 text-primary font-weight-bold">
                          文字標準表單
                        </h4>
                        <v-divider class="mt-2 mb-4"></v-divider>
                        <v-form>
                          <v-text-field
                            label="文字標準表單"
                            hide-details="auto"
                            density="compact"
                          ></v-text-field>
                        </v-form>

                        <div class="text-h1 my-3">標題一</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。不機
                        </p>
                        <div class="text-h2 my-3">標題二</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。不機業臉下天研兩南況有上體遊名，我我機叫少種的。
                        </p>
                        <div class="text-h3 my-3">標題三</div>
                        <p>
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。落然幾檢，牛即弟告者出行飯在教快政有我調個萬，對拿回色無為還成師營各手年天為完種風全，容人友成子選包母何有響好。著是情以裡來不子不覺野行？媽生頭濟那基女的此的下，社麗後難，無升美的力設們就很紙事而不題智香是水學，總切市沒不質熱雜，是視當為青阿少認消大究法成我，都不的友構，的陽式拿八檢腳種合飯市車那張甚活些全萬別他設給步後出領。不機
                        </p>
                        <div class="text-h4 my-3">標題四</div>
                        <v-alert
                          border="start"
                          border-color="primary"
                          elevation="2"
                          title="卡片標題"
                          class="pa-6"
                        >
                          可是能沒笑時打定式義生類還來世辦嗎然北高，日賽館，優子民有也南大我同流童，度念服為去道花能又人別新為開心表好？出了和……新調不？種爸員孩；服分把信系、到筆物前大西一落小海那？開比來個導未求大方大是不。
                        </v-alert>
                        <div class="text-h5 my-3">標題五</div>
                        <ul>
                          <li>影開兒中不們西動會味理化由子常洲國有標題</li>
                          <li>首動我行得流事個要使著獨操大</li>
                          <li>證會不就人推陸跑公片重</li>
                          <li>影開兒中不們西動會味理化由子常洲國有標題</li>
                          <li>首動我行得流事個要使著獨操大</li>
                        </ul>
                        <div class="text-h6 my-3">標題六</div>
                        <ol>
                          <li>影開兒中不們西動會味理化由子常洲國有標題</li>
                          <li>首動我行得流事個要使著獨操大</li>
                          <li>證會不就人推陸跑公片重</li>
                          <li>影開兒中不們西動會味理化由子常洲國有標題</li>
                          <li>首動我行得流事個要使著獨操大</li>
                        </ol>
                      </v-window-item>
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
                <v-col class="pr-1 pb-0" cols="">
                  <v-btn block color="primary">暫存</v-btn>
                </v-col>
                <v-col class="pl-1 pb-0">
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

<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2 class="d-flex align-center">
      共通元素 - 表單
      <v-btn
        class="mr-0 ml-auto"
        color="primary"
        icon="mdi-magnify"
        size="small"
        rounded="sm"
        @click="expand = !expand"
      ></v-btn>
    </h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <!-- 查詢區塊 start -->
    <v-expand-transition>
      <div height="300" v-show="expand">
        <v-card class="mb-6">
          <div class="pa-2">
            <h4 class="text-h6 text-primary font-weight-bold">查詢</h4>
            <v-divider class="pt-1 mb-2"></v-divider>
            <v-form>
              <v-container style="max-width: unset">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      density="compact"
                      label="文字標準表單"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <v-text-field
                      label="文字標準表單"
                      density="compact"
                      hide-details
                      :messages="['文字標準表單']"
                    ></v-text-field>
                    <v-btn
                      class="h-100 ml-5"
                      color="primary"
                      size="small"
                      rounded="sm"
                      >查詢</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </v-card>
      </div>
    </v-expand-transition>
    <!-- 查詢區塊 end  -->
    <v-row class="">
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">文字標準表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                    :messages="['文字標準表單']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    hide-details="auto"
                    error-messages="請填寫正確的格式"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">日期選擇</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="日期選擇"
                    hide-details="auto"
                    density="compact"
                    append-inner-icon="mdi-calendar-range"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    :messages="['文字標準表單']"
                    label="日期選擇"
                    density="compact"
                    append-inner-icon="mdi-calendar-range"
                  >
                    <template v-slot:append>
                      <v-icon> mdi-minus </v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    append-inner-icon="mdi-calendar-range"
                    label="日期選擇"
                    density="compact"
                    :messages="['文字標準表單']"
                    hide-details="auto"
                  ></v-text-field
                ></v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="日期選擇"
                    error-messages="日期選擇"
                    density="compact"
                    append-inner-icon="mdi-calendar-range"
                  >
                    <template v-slot:append>
                      <v-icon> mdi-minus </v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    error-messages="日期選擇"
                    append-inner-icon="mdi-calendar-range"
                    label="日期選擇"
                    hide-details="auto"
                    density="compact"
                  ></v-text-field
                ></v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 單選核取表單 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">單選核取表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col
                  ><v-radio-group
                    inline
                    label="行內排列"
                    color="primary"
                    hide-details="auto"
                  >
                    <v-radio
                      class="d-flex align-start"
                      label="選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一選項一"
                      value="1"
                    ></v-radio>
                    <v-radio label="選項二" value="2"></v-radio>
                    <v-radio label="選項三" value="3"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col
                  ><v-radio-group
                    inline
                    label="行內排列"
                    hide-details="auto"
                    error-messages="垂直排列內容"
                    color="primary"
                  >
                    <v-radio label="選項一" value="1"></v-radio>
                    <v-radio label="選項二" value="2"></v-radio>
                    <v-radio label="選項三" value="3"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col
                  ><v-radio-group
                    color="primary"
                    label="垂直排列"
                    hide-details="auto"
                  >
                    <v-radio label="選項一" value="1"></v-radio>
                    <v-radio label="選項二" value="2"></v-radio>
                    <v-radio label="選項三" value="3"></v-radio> </v-radio-group
                ></v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col>
                  <v-switch
                    color="primary"
                    @click="model = !model"
                    :label="model ? `開啟` : `關閉`"
                  ></v-switch>
                </v-col>
                <v-col>
                  <v-switch
                    color="primary"
                    inset
                    @click="model2 = !model2"
                    :label="model2 ? `開啟` : `關閉`"
                  ></v-switch>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 單選核取表單 end -->
      <!-- 複選核取表單 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">複選核取表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="">
                  <label class="text-primary" for="">複選核取表單</label>
                  <v-row>
                    <v-col v-for="i in 3" :key="i" class="py-0">
                      <v-checkbox
                        color="primary"
                        :label="`選項${i}`"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="">
                  <label class="text-primary" for="">複選核取表單</label>
                  <v-row class="d-block">
                    <v-col v-for="i in 3" :key="i" class="py-0">
                      <v-checkbox
                        color="primary"
                        :label="`選項${i}`"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 複選核取表單 end -->
      <!-- 組合型表單 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">組合型表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-btn class="h-100" color="primary">選擇</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="有icon的輸入匡"
                    type="text"
                    hide-details="auto"
                    :messages="['說明文字']"
                    append-inner-icon="mdi-pencil"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="密碼表單"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    :messages="['說明文字']"
                    @click:append-inner="visible = !visible"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="文字標準表單"
                    hide-details="auto"
                    :messages="['文字標準表單']"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox
                    label="同會員資訊"
                    hide-details="auto"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-select
                    density="compact"
                    label="下拉式選單"
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="9">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-text-field
                    placeholder="886"
                    density="compact"
                    hide-details="auto"
                  >
                    <template v-slot:prepend>
                      <v-icon> mdi-plus </v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field density="compact" hide-details="auto" label="">
                    <template v-slot:append>
                      <p>分機</p>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    density="compact"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="9">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-select
                    label="下拉式選單"
                    single-line
                    density="compact"
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select
                    label="下拉式選單"
                    density="compact"
                    single-line
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="">
                  <v-text-field
                    label="文字標準表單"
                    density="compact"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 組合型表單 end -->
      <!-- 組合型表單 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">組合型表單</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="6" lg="5">
                  <v-text-field
                    variant="solo"
                    single-line
                    label="文字標準表單"
                    hide-details="auto"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" lg="5">
                  <v-text-field
                    variant="solo"
                    label="文字標準表單"
                    hide-details="auto"
                    single-line
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    label="文字標準表單"
                    density="compact"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-btn class="h-100" color="primary">選擇</v-btn>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="">
                  <v-text-field
                    variant="solo"
                    label="有icon的輸入匡"
                    type="text"
                    hide-details="auto"
                    single-line
                    :messages="['說明文字']"
                    append-inner-icon="mdi-pencil"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    single-line
                    label="密碼表單"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    :messages="['說明文字']"
                    @click:append-inner="visible = !visible"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12" lg="2" class="pb-0">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    label="文字標準表單"
                    single-line
                    hide-details="auto"
                    :messages="['文字標準表單']"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-checkbox
                    label="同會員資訊"
                    hide-details="auto"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col cols="12" lg="2" class="pb-0">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="4" lg="3">
                  <v-select
                    variant="solo"
                    density="compact"
                    label="下拉式選單"
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="8" lg="7">
                  <v-text-field
                    variant="solo"
                    single-line
                    density="compact"
                    label="文字標準表單"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="4" lg="3">
                  <v-text-field
                    placeholder="886"
                    density="compact"
                    single-line
                    variant="solo"
                    hide-details="auto"
                  >
                    <template v-slot:prepend>
                      <v-icon> mdi-plus </v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="5" lg="4">
                  <v-text-field
                    density="compact"
                    hide-details="auto"
                    single-line
                    variant="solo"
                    label=""
                  >
                    <template v-slot:append>
                      <p>分機</p>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    density="compact"
                    hide-details="auto"
                    single-line
                    variant="solo"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="4" lg="3">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    variant="solo"
                    single-line
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="8" lg="7">
                  <v-text-field
                    density="compact"
                    label="文字標準表單"
                    single-line
                    hide-details="auto"
                    variant="solo"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary" for="">兩欄欄位</label>
                </v-col>
                <v-col cols="3">
                  <v-select
                    label="下拉式選單"
                    single-line
                    density="compact"
                    variant="solo"
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select
                    label="下拉式選單"
                    density="compact"
                    variant="solo"
                    single-line
                    class="h-100"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </v-col>
                <v-col cols="">
                  <v-text-field
                    label="文字標準表單"
                    single-line
                    density="compact"
                    variant="solo"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 組合型表單 end -->
      <!-- 多行文字輸入表單 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">
            多行文字輸入表單
          </h4>
          <v-divider class="pt-1 mb-2"></v-divider>

          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-textarea
                    hide-details="auto"
                    label="多行文字輸入表單"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    hide-details="auto"
                    label="必填文字"
                    messages="說明文字"
                    :rules="rules"
                    model-value="說明文字說明文字說明文字"
                    counter
                  ></v-textarea
                ></v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 多行文字輸入表單 end -->
      <!-- 下拉選單樣式 start -->
      <v-col md="6" cols="12">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">下拉選單樣式</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row>
                <v-col
                  ><v-select
                    label="下拉式選單"
                    density="compact"
                    hide-details="auto"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select
                ></v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-select
                    label="下拉式選單"
                    hide-details="auto"
                    density="compact"
                    messages="說明文字"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select
                ></v-col>
              </v-row>
              <v-row>
                <v-col
                  ><v-select
                    label="下拉式選單"
                    density="compact"
                    hide-details="auto"
                    error-messages="下拉式選單"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select
                ></v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 下拉選單樣式 end -->
      <!-- 文字編輯器 start -->
      <v-col cols="12" md="6">
        <v-card class="pa-2 h-100">
          <h4 class="text-h6 text-primary font-weight-bold">文字編輯器</h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <!-- 若無需使用則 npm uninstall -D @vueup/vue-quill@latest 解安裝 -->
          <div class="pa-4">
            <quill-editor style="height: 200px"></quill-editor>
          </div>
        </v-card>
      </v-col>
      <!-- 下文字編輯器 end -->
      <!-- 日期選擇器 start -->
      <v-col cols="12" md="6">
        <v-card class="pa-2 h-100 overflow-visible">
          <h4 class="text-h6 text-primary font-weight-bold">
            vue-datepicker 日期選擇器
          </h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <!-- 若無需使用則 npm uninstall -D @vuepic/vue-datepicker 解安裝 -->
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary ml-0" for="">選擇日期</label>
                </v-col>
                <v-col cols="">
                  <VueDatePicker
                    class="datePicker"
                    v-model="date"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary ml-0" for="">日期範圍</label>
                </v-col>
                <v-col cols="">
                  <VueDatePicker
                    class="dateRangerPicker"
                    range
                    :enable-time-picker="false"
                    v-model="rangeDate"
                    select-text="確定"
                    cancel-text="取消"
                  ></VueDatePicker>
                </v-col>
              </v-row>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary ml-0" for="">多日曆選取</label>
                </v-col>
                <v-col cols="">
                  <VueDatePicker
                    class="multiDatePicker"
                    range
                    :enable-time-picker="false"
                    :multi-calendars="{ solo: true }"
                    v-model="multiDate"
                    select-text="確定"
                    cancel-text="取消"
                  ></VueDatePicker>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 日期選擇器 end -->
      <!-- Vueutify組合 日期選擇器 start -->
      <v-col cols="12" md="6">
        <v-card class="pa-2 h-100 overflow-visible">
          <h4 class="text-h6 text-primary font-weight-bold">
            Vueutify組合 日期選擇器
          </h4>
          <v-divider class="pt-1 mb-2"></v-divider>
          <v-form>
            <v-container>
              <v-row class="formGrp">
                <v-col class="pb-0" cols="12" lg="2">
                  <label class="text-primary ml-0" for="">選擇日期</label>
                </v-col>
                <v-col cols=""
                  ><datepickerModalVue> </datepickerModalVue>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
      <!-- 日期選擇器 end -->
    </v-row>
  </v-container>
</template>

<script>
//載入 文字編輯器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

//載入 日期選擇器
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";

export default {
  data: () => ({
    rules: [(v) => v.length <= 10 || "10字為限"],
    visible: false,
    expand: false,
    model: true,
    model2: true,
    date: null,
    rangeDate: null,
    multiDate: null,
  }),
  components: {
    QuillEditor,
    VueDatePicker,
    datepickerModalVue,
  },
};
</script>

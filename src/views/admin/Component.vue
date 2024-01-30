<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>特殊範例頁面 - 網站總覽</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">
                複合型資料控制面板
              </h4>
              <v-divider class="pt-2 mb-2"></v-divider>
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
                  <v-divider class="my-1"></v-divider>
                </v-col>
                <v-col class="pb-0 justify-space-between d-flex" cols="12">
                  <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        size="small"
                        variant="flat"
                        color="primary "
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
            </v-container>
          </div>
        </v-card></v-col
      >
      <v-col md="6" cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">表格樣式</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <v-table density="compact">
                <thead class="bg-thead">
                  <tr>
                    <th class="text-left">編號</th>
                    <th class="text-left">姓名</th>
                    <th class="text-left">性別</th>
                    <th class="text-left">年齡</th>
                    <th class="text-left">居住地</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 3" :key="i">
                    <td>{{ i }}</td>
                    <td>王大明</td>
                    <td>男</td>
                    <td>39</td>
                    <td>台北市</td>
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
              <h4 class="text-h6 text-primary font-weight-bold">標籤樣式</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <!-- 標籤列 start -->
              <v-row class="mb-1">
                <v-col cols="12" class="py-0"
                  ><div>
                    <div class="text-caption">置左</div>
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
                  <v-divider class="my-1"></v-divider>
                </v-col>
                <v-col cols="12" class="py-0"
                  ><div>
                    <div class="text-caption">置中</div>
                    <v-chip-group class="justify-center" v-model="selection">
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
                  <v-divider class="my-1"></v-divider>
                </v-col>
                <v-col cols="12" class="py-0"
                  ><div>
                    <div class="text-caption">置右</div>
                    <v-chip-group class="justify-end" v-model="selection">
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
                  <v-divider class="my-1"></v-divider>
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">按鈕樣式</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <div class="">
                <div class="text-caption mb-2">Vuetify 預設按鈕樣式</div>
                <v-btn size="small" class="ma-1" color="primary">
                  Button
                </v-btn>
                <v-btn size="small" class="ma-1"> Button </v-btn>
                <v-btn size="small" class="ma-1" variant="outlined">
                  outlinedButton
                </v-btn>
                <v-btn size="small" class="ma-1" variant="tonal">
                  tonalButton
                </v-btn>
                <v-btn size="small" class="ma-1" variant="text">
                  textButton
                </v-btn>
                <v-btn size="small" class="ma-1" variant="plain">
                  plainButton
                </v-btn>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <v-card class="h-100">
          <div class="">
            <v-container class="container">
              <h4 class="text-h6 text-primary font-weight-bold">分頁樣式</h4>
              <v-divider class="pt-2 mb-2"></v-divider>
              <!-- Pagination start -->
              <div class="text-center pb-5">
                <v-pagination
                  v-model="page"
                  :length="5"
                  rounded="circle"
                  active-color="primary"
                  color="primary"
                  size="small"
                ></v-pagination>
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
            </v-container>
          </div>
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
    selection: 1,
  }),
  methods: {},
  components: {},
};
</script>

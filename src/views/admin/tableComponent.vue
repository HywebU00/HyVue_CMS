<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>特殊範例頁面 - 網站總覽</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
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
            <v-col class="pb-0 justify-space-between d-flex" cols="12">
              <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
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
          <v-row class="mt-0">
            <v-col>
              <v-table>
                <thead class="bg-thead">
                  <tr>
                    <th class="text-left" style="width: 50px"></th>
                    <th class="text-center" style="width: 50px">序號</th>
                    <th class="text-left">置頂</th>
                    <th class="text-center" style="min-width: 400px">標題</th>
                    <th class="text-left">資料分類</th>
                    <th class="text-left">上線日期</th>
                    <th class="text-left">下線日期</th>
                    <th class="text-left">語系</th>
                    <th class="text-left">狀態</th>
                    <th class="text-left" style="width: 100px">動作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td>
                      <v-checkbox
                        value="1"
                        label=""
                        hide-details=""
                        type="checkbox"
                      ></v-checkbox>
                    </td>
                    <td class="text-center">{{ item.id }}</td>
                    <td>
                      <template v-if="item.top == true">
                        <v-chip label color="primary">置頂</v-chip>
                      </template>
                    </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.dateStart }}</td>
                    <td>{{ item.dateEnd }}</td>
                    <td>{{ item.lang }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <div class="btnGroup d-flex">
                        <v-btn
                          size="x-small"
                          icon="mdi-delete"
                          variant="text"
                        ></v-btn>
                        <v-btn
                          size="x-small"
                          icon="mdi-pencil"
                          variant="text"
                        ></v-btn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
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
    <!-- tablet 卡片列 end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">分隔線</v-divider>
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
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
          <v-row class="mt-0">
            <v-col>
              <v-table>
                <thead class="bg-thead">
                  <tr>
                    <th class="text-left" style="width: 50px"></th>
                    <th class="text-center" style="width: 50px">序號</th>
                    <th class="text-left">圖片</th>
                    <th class="text-center" style="min-width: 400px">標題</th>
                    <th class="text-left">資料分類</th>
                    <th class="text-left">狀態</th>
                    <th class="text-left" style="width: 100px">動作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td>
                      <v-checkbox
                        value="1"
                        label=""
                        hide-details=""
                        type="checkbox"
                      ></v-checkbox>
                    </td>
                    <td class="text-center">{{ item.id }}</td>
                    <td>
                      <v-img
                        :width="60"
                        aspect-ratio="1/1"
                        cover
                        src="~@/assets/demo/06.jpg"
                      ></v-img>
                    </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <v-menu transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            icon="mdi-chevron-down"
                            class="ma-2"
                            v-bind="props"
                            size="x-small"
                          >
                          </v-btn>
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
                        </v-card>
                      </v-menu>
                    </td>
                  </tr>
                </tbody>
              </v-table>
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
    <!-- tablet 卡片列 end -->
    <v-divider class="border-opacity-100 my-8" color="#ccc">
      dataTableServer樣式</v-divider
    >
    <!-- tablet 卡片列 start -->
    <v-card class="mb-5">
      <div class="">
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
          <v-row class="mt-0">
            <v-col>
              <dataTableServer></dataTableServer>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
    <v-divider class="border-opacity-100 my-8" color="#ccc">
      dataTable樣式
    </v-divider>
    <v-card>
      <div class="">
        <v-container>
          <v-row class="mt-0">
            <v-col>
              <dataTable></dataTable>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
    <!-- tablet 卡片列 end -->
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
import dataTable from "@/components/dataTable.vue";
export default {
  data: () => ({
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    selection: 1,
    //table data
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
  }),
  methods: {},
  //table serve
  components: {
    dataTableServer,
    dataTable,
  },
};
</script>

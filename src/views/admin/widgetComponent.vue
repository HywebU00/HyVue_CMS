<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>特殊範例頁面 - 網站總覽</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    <v-row>
      <v-col class="px-1" md="2" cols="12">
        <v-card class="treeviewBlock pa-2">
          <ul>
            <tree-item class="item" :model="treeData"></tree-item>
            <tree-item class="item" :model="treeData2"></tree-item>
          </ul> </v-card
      ></v-col>
      <v-col class="px-1" md="10" cols="12">
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
                  <v-btn variant="flat" color="primary " prepend-icon="mdi-plus"
                    >新增</v-btn
                  >
                </v-col>
              </v-row>
              <!-- 標籤列 end -->
              <v-row class="mt-0">
                <v-col>
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-left" style="width: 50px"></th>
                        <th class="text-center" style="width: 50px">序號</th>
                        <th class="text-left">圖片</th>
                        <th class="text-center" style="min-width: 400px">
                          標題
                        </th>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TreeItem from "@/components/TreeItem.vue";
const treeData = {
  name: "分類Ａ",
  children: [
    { name: "分類Ａ-1" },
    { name: "分類Ａ-2" },
    {
      name: "分類Ａ-3",
      children: [
        {
          name: "分類Ａ-3.1",
        },
        { name: "分類Ａ-3.2" },
        { name: "分類Ａ-3.3" },
        {
          name: "分類Ａ-3.4",
        },
      ],
    },
  ],
};
const treeData2 = {
  name: "分類B",
  children: [
    { name: "分類B-1" },
    { name: "分類B-2" },
    {
      name: "分類B-3",
      children: [
        {
          name: "分類B-3.1",
        },
        { name: "分類B-3.2" },
        { name: "分類B-3.3" },
        {
          name: "分類B-3.4",
        },
      ],
    },
  ],
};
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
    treeData,
    treeData2,
    //table serve
  }),
  methods: {},
  components: {
    TreeItem,
  },
};
</script>

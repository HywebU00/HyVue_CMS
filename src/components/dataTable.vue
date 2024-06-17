<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page-text="customItemsPerPageText"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="">{{ item.name }}</td>
        <td class="">{{ item.class }}</td>
        <td class="">{{ item.title }}</td>
        <td>
          <div class="btnGroup d-flex">
            <v-btn elevation="0" color="primary" size="small" class="mr-1"
              >刪除</v-btn
            >
            <v-btn elevation="0" color="primary" variant="outlined" size="small"
              >新增</v-btn
            >
          </div>
        </td>
        <td class="d-flex justify-center align-center">
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" class="ma-2" v-bind="props" size="x-small">
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
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      customItemsPerPageText: "每頁顯示項目",
      headers: [
        {
          title: "帳號",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "職稱", key: "title", align: "start" },
        { title: "單位", key: "class", align: "start" },
        { title: "動作", key: "action", align: "center", width: "150" },
        { title: "狀態設定", key: "status", align: "end", width: "30" },
      ],
    };
  },
};
</script>

<script setup>
const items = [
  {
    name: "帳號1",
    title: "職稱1",
    class: "單位1",
    action: "動作1",
    status: "狀態設定",
  },
  {
    name: "帳號2",
    title: "職稱2",
    class: "單位2",
    action: "動作2",
    status: "狀態設定",
  },
  {
    name: "帳號3",
    title: "職稱3",
    class: "單位3",
    action: "動作3",
    status: "狀態設定",
  },
];
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="">{{ item.id }}</td>
        <td class="">{{ item.name }}</td>
        <td class="">{{ item.class }}</td>
        <td class="">{{ item.title }}</td>
        <td class="">{{ item.password }}</td>
        <td>{{ item.status }}</td>
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
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    id: "001",
    name: "陳小姐",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "002",
    name: "王先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "003",
    name: "陳小姐",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "004",
    name: "林先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "005",
    name: "賴先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "姓名", key: "name", align: "start", sortable: false },
      { title: "單位", key: "class", align: "start", sortable: false },
      { title: "職稱", key: "title", align: "start", sortable: false },
      { title: "申請時密碼", key: "password", align: "start", sortable: false },
      { title: "狀態", key: "status", align: "start", sortable: false },
      {
        title: "動作",
        key: "iron",
        align: "start",
        sortable: false,
        width: 100,
      },
      {
        title: "功能",
        key: "function",
        align: "center",
        sortable: false,
        width: 100,
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>

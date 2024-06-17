<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="center">
    <template v-slot:activator="{ props }">
      <v-text-field
        variant="solo"
        label="日期選擇"
        v-bind="props"
        hide-details="auto"
        density="compact"
        single-line
        v-model="formattedDate"
        prepend-inner-icon="mdi-calendar-range"
      ></v-text-field>
    </template>
    <v-card min-width="300">
      <v-divider></v-divider>
      <v-date-picker hide-header v-model="date"></v-date-picker>
      <v-card-actions>
        <v-btn variant="text" @click="menu = false"> 取消 </v-btn>
        <v-btn
          color="primary"
          variant="text"
          @click="
            {
              formatted(), (menu = false);
            }
          "
        >
          確認
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      date: null,
      formattedDate: "",
    };
  },
  methods: {
    formatted() {
      this.date
        ? (this.formattedDate = this.date.toLocaleDateString("en-AU"))
        : null;
    },
  },
};
</script>

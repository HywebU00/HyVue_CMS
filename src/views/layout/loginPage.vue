<template>
  <div style="background: #eee" class="h-screen w-100 d-flex justify-center">
    <div ref="loginCard" class="mt-16">
      <v-sheet elevation="5" rounded="lg" width="320px" class="pa-4 r mx-auto">
        <v-img
          :width="100"
          aspect-ratio="1/1"
          class="mr-auto ml-auto"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <h2 class="my-3 text-center">網站管理平台</h2>
        <v-divider class="pt-2 mb-2"></v-divider>
        <v-form fast-fail>
          <v-text-field
            density="compact"
            messages="說明文字"
            label="請輸入帳號"
          ></v-text-field>
          <v-text-field
            label="請輸入密碼"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            :messages="['說明文字']"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="d-flex align-center mb-8">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || '']"
              label="記住我？"
              required
              hide-details=""
            ></v-checkbox>
            <v-btn variant="text">忘記密碼</v-btn>
          </div>
          <v-btn type="submit" block color="primary" class="mt-2">登入</v-btn>
        </v-form>
        <ul class="text-caption text-center mt-8">
          <li>如有登入問題，請聯繫資訊科 王大明 分機123</li>
          <li>電子郵件：abc@gmail.com</li>
        </ul>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data: () => ({
    visible: false,
    checkbox: false,
    theme: "",
    dark: false,
  }),

  methods: {
    cardAnimate() {
      const th = this.$refs.loginCard;
      gsap.fromTo(
        th,
        {
          y: 50,
          opacity: 0.5,
        },
        { y: 0, duration: 1, opacity: 1 }
      );
    },
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = "; expires=" + _date.toGMTString();
      } else {
        _expires = "";
      }
      document.cookie = name + "=" + value + _expires + "; path=/";
    },
    changeTheme(color) {
      let th = this.$vuetify.theme.global;
      th.name = color;
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },
    themeInit() {
      this.theme = this.readCookie("Theme") || null;
      if (this.theme == null) {
        this.theme = "default";
        this.themeDark = false;
      }
      if (this.theme == "dark") {
        this.themeDark = true;
      }
      this.changeTheme(this.theme);
    },
  },
  mounted() {
    this.cardAnimate();
    this.themeInit();
  },
};
</script>

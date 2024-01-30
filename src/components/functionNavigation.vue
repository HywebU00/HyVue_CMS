<!-- 桌機版 start-->
<template>
  <div class="functionList">
    <!-- 暗黑模式 start -->
    <v-btn
      @click="toggleDarkTheme()"
      :icon="
        this.themeDark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'
      "
    ></v-btn>
    <!-- 暗黑模式 end -->
    <!-- 改變字級按鈕 start -->
    <v-menu
      v-model="fontSizeMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <span>{{ btnSize }}</span>
        </v-btn>
      </template>
      <v-card class="fontBtnContainer" min-width="100">
        <ul class="d-flex">
          <li>
            <v-btn
              icon
              size="small"
              role="button"
              @click="fontSizeChange('small')"
              :class="[{ active: this.fontSize === 'small' }, 'bg-primary']"
            >
              小
            </v-btn>
          </li>
          <li>
            <v-btn
              icon
              size="small"
              role="button"
              @click="fontSizeChange('medium')"
              :class="[{ active: this.fontSize === 'medium' }, 'bg-primary']"
            >
              中
            </v-btn>
          </li>
          <li>
            <v-btn
              icon
              size="small"
              role="button"
              @click="fontSizeChange('large')"
              :class="[{ active: this.fontSize === 'large' }, 'bg-primary']"
            >
              大
            </v-btn>
          </li>
        </ul>
      </v-card>
    </v-menu>
    <!-- 改變字級按鈕 end -->
    <!-- 改變顏色按鈕 start -->
    <v-menu
      v-model="colorMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-palette" v-bind="props" />
      </template>
      <v-card class="colorBtnContainer" ref="el" min-width="100">
        <ul class="d-flex">
          <li>
            <v-btn
              icon
              size="x-small"
              @click="changeTheme('default')"
              :class="['default', { active: this.theme === 'default' }]"
            ></v-btn>
          </li>
          <li>
            <v-btn
              icon
              size="x-small"
              @click="changeTheme('color1')"
              :class="['color1', { active: this.theme === 'color1' }]"
            ></v-btn>
          </li>
          <li>
            <v-btn
              icon
              size="x-small"
              @click="changeTheme('color2')"
              :class="['color2', { active: this.theme === 'color2' }]"
            ></v-btn>
          </li>
          <li>
            <v-btn
              icon
              size="x-small"
              @click="changeTheme('color3')"
              :class="['color3', { active: this.theme === 'color3' }]"
            ></v-btn>
          </li>
        </ul>
      </v-card>
    </v-menu>
    <!-- 改變顏色按鈕 end -->
    <!-- 訊息通知按鈕 start -->
    <v-menu
      v-model="infoMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon>
          <v-badge :content="2" color="light">
            <span v-bind="props" class="icon material-icons-round">
              notifications_active
            </span>
          </v-badge>
        </v-btn>
      </template>
      <v-card min-width="100" class="infoBtnContainer">
        <ul class="">
          <li v-for="item in 5" :key="item">
            <a href="#">
              <v-icon color="light" icon="mdi-circle-medium"></v-icon>
              <div>
                <span class="title">本月薪資入帳，立即查看</span>
                <span class="time">111/06/30</span>
              </div>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </li>
        </ul>
      </v-card>
    </v-menu>
    <!-- 訊息通知按鈕 end -->
  </div>
</template>
<!-- 桌機版 end-->

<script>
export default {
  data: () => ({
    theme: "",
    themeDark: false,
    mobileHeader: false,
    userLoginCard: false,
    ////////////////////////
    fontSizeMenu: false,
    fontSize: "",
    colorMenu: false,
    infoMenu: false,
    searchMenu: false,
    /////////////////////////
    cookie: "",
    btnSize: "",
    colorCookie: "",
  }),
  methods: {
    toggleDarkTheme() {
      let th = this.$vuetify.theme.global;
      th.name === `dark` ? (th.name = `default`) : (th.name = `dark`);
      this.createCookie("Theme", `${th.name}`, 356);
      this.themeDark = !this.themeDark;
      if (this.themeDark === true) {
        this.theme = "default";
      }
    },
    changeTheme(color) {
      let th = this.$vuetify.theme.global;
      th.name = color;
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },
    fontSizeChange(targetSize) {
      this.createCookie("FontSize", `${targetSize}`, 356);
      this.changeFontSizeClass(targetSize);
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
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    changeFontSizeClass(targetName) {
      const body = document.querySelector("body");
      switch (targetName) {
        case "small":
          body.classList.remove("largeSize", "mediumSize");
          body.classList.add("smallSize");
          this.fontSize = "small";
          break;
        case "medium":
          body.classList.remove("smallSize", "largeSize");
          body.classList.add("mediumSize");
          this.fontSize = "medium";
          break;
        case "large":
          body.classList.remove("smallSize", "mediumSize");
          body.classList.add("largeSize");
          this.fontSize = "large";
          break;
      }
      this.getFontSizeText(targetName);
    },
    getFontSizeText(textSize) {
      switch (textSize) {
        case "small":
          this.btnSize = "小";
          break;
        case "medium":
          this.btnSize = "中";
          break;
        case "large":
          this.btnSize = "大";
          break;
      }
    },
    fontSizeInit() {
      const body = document.querySelector("body");
      this.cookie = this.readCookie("FontSize") || null;
      if (this.cookie == null) {
        this.cookie = "medium";
      }
      this.fontSize = this.cookie;
      body.classList.add(`${this.cookie}Size`);
      this.getFontSizeText(this.cookie);
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
    //桌機與手機版本header 切換
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991
        ? (this.mobileHeader = true)
        : (this.mobileHeader = false);
      this.isSmallScreen = window.innerWidth < 991;
    },
  },
  mounted() {
    this.fontSizeInit();
    this.handleResize();
    this.themeInit();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

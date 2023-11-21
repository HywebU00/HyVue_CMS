<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :class="['navDrawer', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      :width="256"
      @click="rail = false"
    >
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        height="64"
        class="rounded-0 navBtn d-md-none ml-auto"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!-- 平台logo start -->
      <div class="logoImg d-none d-md-flex ml-3 mt-5">
        <v-img
          class="logo"
          height="32"
          max-width="32"
          src="~@/assets/logo.png"
          alt=""
        />
        <h1 class="ml-2 text-h6">管理平台樣板</h1>
      </div>
      <!-- 平台logo end -->
      <v-list
        density="compact"
        nav
        class="text-navText"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <!-- Home1 start -->
        <v-list-group value="Home1">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-home"
              v-bind="props"
              append-icon=""
              title="Home"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- Home1 end -->
        <!-- 案件管理 end -->
        <v-divider class="ma-1"></v-divider>

        <!-- Element start -->
        <v-list-group value="Element">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Element"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Grid System"
            value="Grid System"
            @click="pushLink('system')"
          >
          </v-list-item>
          <v-list-item
            title="Component"
            value="Component"
            @click="pushLink('component')"
          >
          </v-list-item>
          <v-list-item title="From" value="From" @click="pushLink('from')">
          </v-list-item>
          <v-list-item title="Table" value="Table" @click="pushLink('table')">
          </v-list-item>
          <v-list-item title="Card" value="Card" @click="pushLink('card')">
          </v-list-item>
          <v-list-item title="Chart" value="Chart" @click="pushLink('chart')">
          </v-list-item>
        </v-list-group>
        <!-- Element end -->
        <!-- Basic Layout start -->
        <v-list-group value="Basic Layout">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-layers"
              v-bind="props"
              title="Basic Layout"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Widget"
            value="Widget"
            @click="pushLink('widget')"
          >
          </v-list-item>
        </v-list-group>
        <!-- Basic Layout end -->
        <v-divider class="ma-1"></v-divider>
        <!-- 登入頁面 start -->
        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-login"
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('login')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 登入頁面 end -->
      </v-list>
      <!-- 使用者 登入視窗start -->
      <div class="userInfo bg-loginColor">
        <v-avatar image="~@/assets/account.jpg" size="35"></v-avatar>
        <ul class="">
          <li>Elle Wang</li>
          <li>企劃處</li>
        </ul>
        <button><span class="material-icons-round"> logout </span></button>
      </div>
      <!-- 使用者 登入視窗end -->
      <!--  navigation-drawer end-->
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <functionNavigation />
    </v-app-bar>
    <v-main>
      <pageView />
    </v-main>
  </v-app>
</template>

<script>
import functionNavigation from "@/components/functionNavigation.vue";
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "0",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    functionNavigation,
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 56);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

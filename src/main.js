import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import "@/sass/settings.scss";
//chart
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

registerPlugins(app);

app.use(VueApexCharts).mount("#app");

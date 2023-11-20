/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
import { md3 } from "vuetify/blueprints";
import { VDataTableServer } from "vuetify/labs/VDataTable";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // blueprint: md3,
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#331919",
          secondary: "#695f5f",
          loginColor: "#331919",
          light: "#fc590f",
          navText: "#331919",
          thead: "#eae1dc",
        },
      },
      green: {
        dark: false,
        colors: {
          primary: "#1e484a",
          secondary: "#1f6053",
          loginColor: "#1e484a",
          light: "#36e79e",
          navText: "#1e484a",
          thead: "#dae0db",
        },
      },
      blue: {
        dark: false,
        colors: {
          primary: "#103d5c",
          secondary: "#0786b2",
          loginColor: "#103d5c",
          light: "#00f0ff",
          navText: "#103d5c",
          thead: "#dadfe0",
        },
      },
      red: {
        dark: false,
        colors: {
          primary: "#4e0c30",
          secondary: "#852648",
          loginColor: "#4e0c30",
          light: "#ff378c",
          navText: "#4e0c30",
          thead: "#e0dadd",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#fefefe",
          loginColor: "#000",
          secondary: "#695f5f",
          light: "#ff378c",
          thead: "#525252",
        },
      },
    },
  },
  components: {
    VDataTableServer,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});

import colors from "vuetify/lib/util/colors";

export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  ssr: true,
});

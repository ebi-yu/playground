export default defineNuxtConfig({
  routeRules: {
    "/csr": { ssr: false },
    "/ssr": { ssr: true },
    "/ssg": { ssr: true, prerender: true },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/global.css"],
});

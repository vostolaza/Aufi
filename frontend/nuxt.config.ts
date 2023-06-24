import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src",

  modules: ["@nuxtjs/device", "nuxt-swiper", "@nuxtjs/google-fonts"],

  css: ["@/assets/css/tailwind.css"],

  devtools: {
    enabled: true,
  },

  swiper: {
    prefix: "Swiper",
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: true,
  },

  vite: {
    plugins: [svgLoader({ svgo: false })],
  },

  runtimeConfig: {
    public: {
      apiUrl: "",
      cmsUrl: "",
      apiToken: "",
      paymentCountries: "",
      siteUrl: "",
    },
    apiToken: "",
    elasticCloudId: "",
    elasticApiKey: "",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
});

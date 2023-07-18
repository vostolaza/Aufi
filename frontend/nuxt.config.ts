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
      type: "service_account",
      projectId: "aufi-0079",
      privateKeyId: "b964db5a7abbe5c44f27fe8531bf844a656b2532",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0GA5+T9PPvUFy\nEnSuxqZ4nwgtdMMRm1/3R1dR14GUjC95M29p+oFvkvizY70XhMVBYbbaYNEScojh\n0T0szmO8/t26ZmJ+Fp6rMYzdDrWS+bW83Iv3XQ6XlrEoNayYpT1S0Dr7RojBCs6D\num/VSPRqqAzKYq35htQaKGsHXDKWIVipvDLT6ufk+UtO5bLEC5ulDYnWAVnwQ6j5\nT4AIAjMBJYsb/WlI5y1Rj1+K0YmTY+RUUvmHbz0YLRkvkBIEgI6M/AjFkbutvM23\nBrnmF96zKca/4CM69fq2H90/5r0BzZzx7+qMc7cXzfTZdpzmDuiPxid5Oo0rylhh\npTGbCfJTAgMBAAECggEAAP3W6pbJmEMMVAf0+4IIKEbb4Srbk20TE1tMXZzS+lHm\nmwNk/CTkceGnG+RohfN1sJKh/UQmMon4kKG5yqrc6A1RLuBhxMb0GwYxUTBDtf+e\nTWAQ0eJXHQ+NLHxV1cX8d0htOAqfNcziQ929auO1cMw5vHgxnrDsLwlaRCvw8rGm\n7cJl5Ld7x8BFKLD3kiTKnX91BtHqGOoyP01q+ZHwuWBBjUgwL8b/zejdDoK6HlqS\n3Xh72JKQDMi6xtSkNR8o6PRFOLG2kldXM0fuxhFePbc5us3eVd5ZVz9RH5Gz/4L8\nTr0a0doe9RDoWoKxiwkAdmkfnj8gpviWw7x9VpaJuQKBgQDwCvF9utdPaYlcgrKQ\nj120x5M+Y3+BbLXOd7vbzO9iGZDeclaPQvxaLyYDcou8eelq7FTZ4kqqKhFewtQw\nA1I6oOMHwTp3LEjB3VU9+fQDt279xetwjvW9IW/uaQHN3/fhEV5JQdFuDndhWuaH\nq2zExwrztq5Pk5Zrj8L9vjGZmwKBgQDAEOcYlCNxS4Mm/cXtCQbBpjS/1w6doX+M\nlXFj6gSJQqSwTSHZOEaknFI1Kc7fm0sFYGn5h8PDSF4FOyESxXF35/MKgG0SkVw/\n6PiCqXe1Um1BVBtiGORN8tED2YAkTuXTP7MrjOSjPivUHTbFIh/0MY2oUsAahi1B\nIlihiezRqQKBgD6/3ZksepR71jikweEgWTKk6Uzp3a8LqAstKaKv0/QlEsXTxeT1\ncdpxcNJ94yGGDQqydQvwJ+yLyram36kddSV2YWLplEsK/IoRPfNRoARIs28LihyG\ngp7KWuRL9vjGj5n6XFdyKTlH9tUwWgslOO3HyokjPDX5Mt0zW5nRWk35AoGAC7p8\ngjG5oFd+IMlqZrkgYn7lxbk6OUH9afZOQE2wDTm2mNV89ajMF408L+bnrRvsjt1+\nWzCBMdGffC5KLL1F2o6ddsy03Gdn/LcbRc9Xcgkghta9/VWLy37CaLvFaXIv8qB3\nLneiFp3bS06lY5Bb5yuHfPngpT4AUXPpeaPUhFECgYEAqw98zZLxjWafTy1B29Z3\nFC4LUXkdpa+Fyz8uYU9HH0eNr005nBl0Yi5/XX6OtWT7mdDm0rW2ebY1tPb3Zu1I\ns1zTBp3LZb5MhuBJHPcyzqXbCtBev01u48g99dYOeCzawHDlMWm3Rbg77SZuDW4Z\n8IZOekHUC5sMVOpY34ykPpc=\n-----END PRIVATE KEY-----\n",
      clientEmail: "aufi-manager@aufi-0079.iam.gserviceaccount.com",
      clientId: "115370021373772943047",
      authUri: "https://accounts.google.com/o/oauth2/auth",
      tokenUri: "https://oauth2.googleapis.com/token",
      authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
      clientX509CertUrl:
        "https://www.googleapis.com/robot/v1/metadata/x509/aufi-manager%40aufi-0079.iam.gserviceaccount.com",
      universeDomain: "googleapis.com",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
});

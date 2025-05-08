// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],

  devServer: {
    port: 3001,
    host: '0.0.0.0',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  unocss: {
    nuxtLayers: true,
  },

})

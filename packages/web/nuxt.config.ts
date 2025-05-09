// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    '@mh/ui',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],

  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  unocss: {
    nuxtLayers: true,
  },
})

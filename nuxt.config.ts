import postcss from './postcss.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
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

  vite: {
    plugins: [],
    css: {
      postcss,
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

})

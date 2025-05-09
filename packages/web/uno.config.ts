import { mergeConfigs } from '@unocss/core'
// import presetWind4 from '@unocss/preset-wind4'
// import transformerDirectives from '@unocss/transformer-directives'
// import { defineConfig, presetIcons } from 'unocss'
import { presetIcons } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  presets: [
    presetIcons({
      collections: {
        mdi: () => import('@iconify/json/json/mdi.json').then(i => i.default),
      },
    }),
  ],
}])

// export default defineConfig({
//   presets: [
//     presetWind4(),
//     presetIcons({
//       collections: {
//         mdi: () => import('@iconify/json/json/mdi.json').then(i => i.default),
//       },
//     }),
//   ],
//   transformers: [
//     transformerDirectives(),
//   ],
// })

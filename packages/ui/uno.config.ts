// import mdi from '@iconify/json/json/mdi.json'
import { mergeConfigs } from '@unocss/core'
import presetWind4 from '@unocss/preset-wind4'
import transformerDirectives from '@unocss/transformer-directives'
import { presetAttributify, presetIcons, presetTypography } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  presets: [
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify/json/json/mdi.json').then(i => i.default),
      },
    }),
    presetTypography(),
    presetWind4(),
  ],
  rules: [
    ['text-bxl', {
      'font-size': '2rem',
      'font-weight': 'bold',
    }],
  ],
  theme: {
    colors: {
      'main-t': {
        DEFAULT: '#0E101B',
      },
      'p': {
        DEFAULT: '#e5e5e5',
      },
      'sub-p': {
        DEFAULT: 'rgba(0, 0, 0, 0.07)',
      },
      'sub-p-hover': {
        DEFAULT: 'rgba(0, 0, 0, 0.07)',
      },
    },
  },
  transformers: [
    transformerDirectives(),
  ],
}])

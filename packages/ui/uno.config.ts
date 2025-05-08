import { mergeConfigs } from '@unocss/core'
import { presetAttributify, presetIcons, presetTypography } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  // presets: [
  //   presetAttributify(),
  //   // presetIcons(),
  //   presetTypography(),
  // ],
  // rules: [
  //   ['text-bl', {
  //     'font-size': '2rem',
  //     'font-weight': 'bold',
  //   }],
  // ],
}])

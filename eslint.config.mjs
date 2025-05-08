// @ts-check

import antfu from '@antfu/eslint-config'
import nuxt from './packages/web/.nuxt/eslint.config.mjs'

export default antfu(
  {
    formatters: true,
  },
)
  .append(nuxt())

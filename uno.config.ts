import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUni({
      attributify: {
        prefixedOnly: true,
      },
    }),
  ],
  transformers: [
    // 用于 @apply、@screen 和 theme() 指令
    transformerDirectives(),
    // 变体分组功能，eg: `<div class="font-(light mono)" />`
    transformerVariantGroup(),
  ],
  shortcuts: [
    {
      center: 'flex justify-center items-center',
    },
  ],
  safelist: [],
  rules: [
    [
      'p-safe',
      { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
  theme: {
    colors: {
      /** 主题色，用法如: text-primary */
      primary: 'var(--wot-color-theme,#0957DE)',
    },
    fontSize: {
      /** 提供更小号的字体，用法如：text-2xs */
      '2xs': ['20rpx', '28rpx'],
      '3xs': ['18rpx', '26rpx'],
    },
  },
})

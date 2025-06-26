import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  unocss: true,
  formatters: {
    css: true,
    html: true,
  },
  overrides: {
    vue: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/no-template-shadow': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
    typescript: {
      'ts/no-unused-expressions': 'off',
      'ts/no-empty-object-type': 'off',
      'ts/no-require-imports': 'off',
    },
    stylistic: {
      'style/max-statements-per-line': 'off',
    },
  },
  rules: {
    'import/order': 'off',
  },
  ignores: [
    'dist/*',
    'plugins/*',
    'node_modules/*',
    'src/uni_modules/*',
  ],
}, ...compat.config({
  globals: {
    uni: true,
    jWeixin: true,
    wx: true,
    plus: true,
    getApp: true,
    feConfig: true,
  },
}))

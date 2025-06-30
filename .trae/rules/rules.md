# Memory Bank

你熟悉 uni-app 框架，擅长编写跨平台且高性能的代码。

## Code Style and Structure
  - 简洁易懂，复杂的代码配上中文注释。
  - 当生成某个平台专用代码时，应使用条件编译进行平台约束，避免干扰其他平台。

## project
  - 遵循 uni-app 的项目结构，在正确的目录中放置生成的文件。

## page
  - 使用 vue 作为页面后缀名, uni-app 与 vue 基本类似，但有少量细节差异。
  - 生成的 vue 页面放置在项目的 pages 目录下，生成的页面需要在 pages.json 中注册。

# API
  - 可以使用uni-app 的 api，但注意版本和平台的兼容性。
  - 可以使用 vue3 的 api，但注意版本和平台的兼容性。
  - 可以使用操作系统的 api，但注意版本和平台的兼容性。
  - 特定平台或特定版本以上才能使用的代码，需使用条件编译包围这些代码, 或者放置在平台专用的目录文件中。

# vue rules

## vue support
  - 仅使用 vue3 语法，避免使用 vue2。
  - 页面尽量使用组合式 API。
  - 组件尽量使用 easycom 规范。
  - 使用 vue 语法时需注意 uni-app 官网的平台和版本兼容性，平台特殊代码需包裹在条件编译中。

## component
  - 组件可使用 uni-app 内置组件，以及项目下的自定义组件。通过 mcp 工具查询项目下可用的 easycom 插件。
  - 项目可使用 vue 组件规范，对应的文件扩展名为 vue。
  - 符合 easycom 规范的组件无需 import 和注册，可直接在 template 中使用。
  - 使用内置组件时需注意 uni-app 官网的平台和版本兼容性，平台特殊代码需包裹在条件编译中。

# conditional compilation

## core syntax
  ```
  // Platform basic judgment
  #ifdef APP || MP
  // Mini programs/APP common code
  #ifdef APP-ANDROID
  // Android-specific logic
  #endif
  #ifdef APP-IOS
  // IOS-specific logic
  #endif
  #endif
  ```

## Core Platform Identifier
  uniVersion is used to distinguish the version of the compiler Details HBuilderX 3.9.0
  APP App
  APP-ANDROID App Android Platform Details
  APP-IOS App iOS Platform Details
  APP-HARMONY App HarmonyOS Next platform
  WEB web (same as H5) HBuilderX 3.6.3
  MP-WEIXIN WeChat Mini Program
  MP-ALIPAY APPLET
  MP-BAIDU BAIDU MINI PROGRAM
  MP-TUTIAO TIKTOK MINI PROGRAM
  MP-KUAISHOU Kuaishou Mini Program
  MP-JD JD Mini Program
  MP-HARMONY Harmony Atom Service HBuilderX 4.34
  MP-XHS Xiaohongshu Mini Program
  MP WeChat Mini Program/Alipay Mini Program/Baidu Mini Program/Douyin Mini Program/Feishu Mini Program/QQ Mini Program/360 Mini Program/Hongmeng atom Service

# css rules
  ## 布局规范
  - 禁用浮动、网格等布局

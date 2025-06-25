import { createSSRApp } from 'vue'
import ajax from '@/plugins/uni-ajax'
import { setupStore } from '@/store'
import App from './App.vue'

uni.$http = ajax

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
  }
}

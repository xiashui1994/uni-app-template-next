import { createSSRApp } from 'vue'
import alova from '@/plugins/alova'
import { setupStore } from '@/store'
import App from './App.vue'
import 'virtual:uno.css'

uni.$http = alova

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)
  return {
    app,
  }
}

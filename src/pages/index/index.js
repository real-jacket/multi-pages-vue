import Vue from 'vue'
import App from './index.vue'
import router from './router'
import store from '@/store/'
import entryConfig from '_lib/entryConfig'

// 调用公共方法加载配置
entryConfig(Vue)

new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})
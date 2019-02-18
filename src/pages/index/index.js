import Vue from 'vue'
import App from './index.vue'
import router from './router'
import store from '@/store/'
import { Navigator } from '../../common/navigator'

Vue.prototype.$openRouter = Navigator.openRouter

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})
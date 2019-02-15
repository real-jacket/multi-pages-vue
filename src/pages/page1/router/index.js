/* page1 单页路由配置 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页
export default new Router({
    mode:'history',
    base:`${process.env.BASE_URL}` + 'page1',
    routes:[
        {
            path:'/',
            name:'about',
            component: ()=>{import('../views/about.vue')}
        }
    ]
})
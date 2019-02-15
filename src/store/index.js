import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups:[1]
  },
  modules:{
    moduleA, // 引入A模块
    moduleB, // 引入模块B
  },
  mutations, // 根级别的mutations
  actions, // 根级别的actions

  // 根级别的getters
  getters:{
    getGroups(state){
      return state.groups
    }
  }
})

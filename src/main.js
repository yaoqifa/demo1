// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from '@/routes/routers'
// import store from '@/store'

import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getCount (state) {
      return state.count
    },
    getCount2: state => state.count
  },
  mutations: {
    increment (state, price) {
      // 同步操作
      state.count += price
    },
    decrement (state, price) {
      state.count -= price
    }
  },
  actions: {
    actIncrement (context, param) {
      // 可以执行异步操作
      context.commit('increment', param)
    },
    actDecrement (context, param) {
      context.commit('decrement', param)
    }
  }
})

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  components: {
    App
  }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Cat from '@/components/cat'
import Dog from '@/components/dog'

/* eslint-disable no-new */
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/dog'
  },
  {
    path: '/cat',
    component: Cat
  },
  {
    path: '/dog',
    component: Dog
  }
]

export default new VueRouter({
  routes
})

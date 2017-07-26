// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './common/reset.css'
import 'animate.css/animate.css'
import App from './App'
import VueRouter from 'vue-router'
import Banner from './components/banner/hamabanner.vue'
import Itro from './components/intro/hamaintro.vue'
import Step from './components/step/hamastep.vue'
import Purchase from './components/purchase/hamapurchase.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element, VueRouter)
const routes = [
  {path: '/', components: Banner},
  {path: '/02', components: Step},
  {path: '/03', components: Itro},
  {path: '04', components: Purchase}
]
const router = new VueRouter({
  routes
})
router.push({path: 'Banner'})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})


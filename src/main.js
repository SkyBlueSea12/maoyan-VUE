import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from 'router'
import VueTouch from "vue-touch"
import "./assets/font/iconfont.css"
import "./common/components/index.js"
import "./common/filter/index.js"
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})//使用手指事件的插件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

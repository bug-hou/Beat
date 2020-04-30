import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.direction("focus",{
  inserted (el){
    el.focus();
    // 使用在要获取到的input中的标签中加入v-focus
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

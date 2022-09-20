import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import PizzaUI from '@bigbighu/mobili-pizza'
import CoffeeUI from '@bigbighu/mobili-coffee'
Vue.config.productionTip = false
Vue.use(PizzaUI)
Vue.use(CoffeeUI)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

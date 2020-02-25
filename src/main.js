import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //creating a new vue instance
  //rendering the main component
  render: h => h(App)
}).$mount('#app')

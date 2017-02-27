import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

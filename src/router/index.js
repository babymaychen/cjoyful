import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Ranking from '../pages/ranking'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})

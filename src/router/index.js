import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Ranking from '../pages/ranking'
import player from '../pages/player'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/play',
      name: 'Play',
      component: player
    }
  ]
})

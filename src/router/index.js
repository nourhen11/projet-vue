import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Search from '../views/Search.vue'
import Latest from '../views/Latest.vue'
import Upcoming from '../views/Upcoming.vue'
import Favorite from '../views/Favorite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: Details
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/latest',
    name: 'Latest',
    component: Latest
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

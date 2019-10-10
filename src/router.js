import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Items from './views/Items.vue'
import Categories from './views/Categories.vue'
import Tags from './views/Tags.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
  ]
})

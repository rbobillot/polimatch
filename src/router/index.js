import { createRouter, createMemoryHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import MatchingView from '../views/MatchingView.vue'

const router = createRouter({
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/matching',
      name: 'matching',
      component: MatchingView
    },
  ]
})

export default router
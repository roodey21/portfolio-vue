import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import NewPortfolioView from '../views/NewPortfolioView.vue'
import DetailPortfolio from '../views/DetailPortfolio.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: NewPortfolioView
    },
    {
      path: '/portfolio/:slug',
      name: 'portfolio-detail',
      component: DetailPortfolio
    },
    {
      path: '/new-portfolio',
      name: 'new-portfolio',
      component: PortfolioView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/test',
      name: 'test',
      component: DetailPortfolio
    }
  ]
})

export default router

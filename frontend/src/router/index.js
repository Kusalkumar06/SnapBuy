import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import CartPage from '@/pages/CartPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import ShopPage from '@/pages/ShopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
  ],
})

export default router
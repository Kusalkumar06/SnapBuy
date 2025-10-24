import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'
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
      meta: { requiresAuth: true } ,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: { requiresAuth: true } ,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
      meta: { requiresAuth: true } ,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/pages/CheckoutPage.vue'),
      meta: { requiresAuth: true } ,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFoundPage.vue') }
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const toast = useToast()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    toast.error("You don't have access to this page. Please login.")
    next(false) 
  } else {
    next() 
  }
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import CartPage from '@/pages/CartPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import ShopPage from '@/pages/ShopPage.vue'
import WishlistPage from '@/pages/WishlistPage.vue'

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
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/pages/CheckoutPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/pages/ForgotPasswordPage.vue'),
    },
    {
      path: '/reset-password/:token',
      name: 'reset-password',
      component: () => import('@/pages/ResetPasswordPage.vue'),
    },
    {
      path: '/verify-email/:token',
      name: 'verify-email',
      component: () => import('@/pages/VerifyEmailPage.vue'),
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: () => import('@/components/ProductDetails.vue'),
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/orders',
      name: 'my-orders',
      component: () => import('@/pages/MyOrdersPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/orders/:id',
      name: 'order-details',
      component: () => import('@/pages/OrderDetailsPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/ProfilePage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
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

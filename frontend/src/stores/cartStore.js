import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useToast } from 'vue-toastification'

const API_URL = import.meta.env.VITE_API_BASE_URL

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: {
      items: [],
      totalPaise: 0,
    },
    loading: false,
    isCartOpen: false,
    error: null,
  }),

  getters: {
    totalItems: (state) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0),

    /** Display-only value (single source for UI) */
    totalPriceRupees: (state) => (state.cart.totalPaise / 100).toFixed(2),

    getItemById: (state) => (productId) =>
      state.cart.items.find((item) => item.product?._id === productId),
  },

  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken')
      return token ? { Authorization: `Bearer ${token}` } : {}
    },

    setCart(cart) {
      this.cart = {
        items: cart?.items || [],
        totalPaise: cart?.totalPaise || 0,
      }
    },

    async fetchCart() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get(`${API_URL}/cart/getCart`, { headers: this.getAuthHeader() })

        this.setCart(res.data.cart)
      } catch (err) {
        console.error(err)
        this.error = err.response?.data?.message || 'Failed to fetch cart'
      } finally {
        this.loading = false
      }
    },

    async addToCart(productId) {
      const toast = useToast()
      const token = Cookies.get('SnapBuyToken')

      if (!token) {
        toast.error('Please login to add product to the cart.', {
          timeout: 2500,
          position: 'top-right',
        })
        return
      }

      this.loading = true
      this.error = null

      try {
        const res = await axios.post(
          `${API_URL}/cart/add`,
          { productId },
          { headers: this.getAuthHeader() },
        )

        this.setCart(res.data.cart)

        toast.success('Product added to cart successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        console.error(err)
        this.error = err.response?.data?.message || 'Failed to add to cart'
      } finally {
        this.loading = false
      }
    },

    async decreaseCartItem(productId) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.post(
          `${API_URL}/cart/decrease`,
          { productId },
          { headers: this.getAuthHeader() },
        )

        this.setCart(res.data.cart)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to decrease item'
      } finally {
        this.loading = false
      }
    },

    async removeItem(productId) {
      this.loading = true
      this.error = null
      const toast = useToast()

      try {
        const res = await axios.post(
          `${API_URL}/cart/remove`,
          { productId },
          { headers: this.getAuthHeader() },
        )

        this.setCart(res.data.cart)

        toast.success('Item removed from cart', {
          timeout: 1500,
        })
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to remove item'
        toast.error(this.error)
      } finally {
        this.loading = false
      }
    },

    async clearCart() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.post(`${API_URL}/cart/clear`, {}, { headers: this.getAuthHeader() })

        this.setCart(res.data.cart)
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to clear cart'
      } finally {
        this.loading = false
      }
    },

    openCart() {
      this.isCartOpen = true
    },

    closeCart() {
      this.isCartOpen = false
    },
  },
})

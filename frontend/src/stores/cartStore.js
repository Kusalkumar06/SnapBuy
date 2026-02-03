import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useToast } from 'vue-toastification'

const API_URL = import.meta.env.VITE_API_BASE_URL

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: { items: [], totalPrice: 0 },
    loading: false,
    isCartOpen: false,
    error: null,
  }),
  getters: {
    totalItems: (state) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0),

    getItemById: (state) => (productId) =>
      state.cart.items.find((item) => item.product._id === productId),
  },
  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken')
      return token ? { Authorization: `Bearer ${token}` } : {}
    },

    async fetchCart() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get(`${API_URL}/cart/getCart`, { headers: this.getAuthHeader() })
        this.cart.items = [...res.data.cart.items]
        this.cart.totalPrice = res.data.cart.total
      } catch (err) {
        console.log(err)
        this.error = err.response?.data?.message || 'Failed to fetch cart'
      } finally {
        this.loading = false
      }
    },

    async addToCart(productId) {
      const token = Cookies.get('SnapBuyToken')
      const toast = useToast()

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
        this.cart = res.data.cart

        toast.success('Product added to cart successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        console.log(err)
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
        this.cart = res.data.cart
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to decrease item'
      } finally {
        this.loading = false
      }
    },

    async clearCart() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.post(`${API_URL}/cart/clear`, {}, { headers: this.getAuthHeader() })
        this.cart = res.data.cart
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to clear cart'
      } finally {
        this.loading = false
      }
    },

    async removeItem(productId) {
      this.loading = true
      this.error = null
      console.log(productId)
      try {
        const res = await axios.post(
          `${API_URL}/cart/remove`,
          { productId },
          { headers: this.getAuthHeader() },
        )
        this.cart = res.data.cart
        const toast = useToast()
        toast.success('Item removed from cart', { timeout: 1500 })
      } catch (err) {
        this.error = err.response?.data?.message || 'Failed to remove item'
        const toast = useToast()
        toast.error(this.error)
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

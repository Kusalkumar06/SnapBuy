import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = import.meta.env.VITE_API_BASE_URL

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
    currentOrder: null,
    loading: false,
    error: null,
  }),
  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken')
      return token ? { Authorization: `Bearer ${token}` } : {}
    },

    async placeOrder(shippingAddress, paymentMethod) {
      this.loading = true
      this.error = null
        try {
          const res = await axios.post(
            `${API_URL}/orders/`,
            { shippingAddress, paymentMethod },
            { headers: this.getAuthHeader() },
          )
          this.currentOrder = res.data.order
          return res.data.order
        } catch (err) {
          console.error('Place Order Error:', err)
          this.error = err.response?.data?.message || 'Failed to place order'
          throw new Error(this.error)
        } finally {
          this.loading = false
        }
      },

      async createRazorpayOrder(orderId) {
        this.loading = true
        this.error = null
        try {
          const res = await axios.post(
            `${API_URL}/payments/create`,
            { orderId },
            { headers: this.getAuthHeader() }
          )
          return res.data
        } catch (err) {
          console.error('Create Razorpay Order Error:', err)
          throw new Error(err.response?.data?.message || 'Failed to create Razorpay secure order')
        } finally {
          this.loading = false
        }
      },

      async verifyRazorpayPayment(paymentData) {
        this.loading = true
        this.error = null
        try {
          const res = await axios.post(
            `${API_URL}/payments/verify`,
            paymentData,
            { headers: this.getAuthHeader() }
          )
          return res.data
        } catch (err) {
          console.error('Verify Razorpay Payment Error:', err)
          throw new Error(err.response?.data?.message || 'Payment verification failed')
        } finally {
          this.loading = false
        }
      },

    async fetchMyOrders() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`${API_URL}/orders/my/`, {
          headers: this.getAuthHeader(),
        })
        this.orders = res.data.orders
      } catch (err) {
        console.error('Fetch My Orders Error:', err)
        this.error = err.response?.data?.message || 'Failed to fetch orders'
        this.orders = []
      } finally {
        this.loading = false
      }
    },

    async fetchOrderById(orderId) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`${API_URL}/orders/${orderId}/`, {
          headers: this.getAuthHeader(),
        })
        this.currentOrder = res.data.order
      } catch (err) {
        console.error('Fetch Order Details Error:', err)
        this.error = err.response?.data?.message || 'Failed to fetch order details'
        throw new Error(this.error)
      } finally {
        this.loading = false
      }
    },
  },
})

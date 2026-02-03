import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useToast } from 'vue-toastification'

const API_URL = import.meta.env.VITE_API_BASE_URL

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: [],
    loading: false,
    error: null,
  }),
  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken')
      return { Authorization: `Bearer ${token}` }
    },

    async fetchWishlist() {
      this.loading = true
      try {
        const res = await axios.get(`${API_URL}/wishlist/getWishList`, {
          headers: this.getAuthHeader(),
        })
        this.wishlist = res.data.wishlist.items.map((i) => i.product)
      } catch (err) {
        this.error = err.response?.data?.message || 'Error fetching wishlist'
      } finally {
        this.loading = false
      }
    },

    async addToWishlist(productId) {
      const toast = useToast()
      try {
        await axios.post(
          `${API_URL}/wishlist/addToWishList`,
          { productId },
          { headers: this.getAuthHeader() },
        )
        await this.fetchWishlist()
        toast.success('Added to wishlist successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        this.error = err.response?.data?.message
      }
    },

    async removeFromWishlist(productId) {
      const toast = useToast()
      try {
        await axios.delete(`${API_URL}/wishlist/removeFromWishList/${productId}`, {
          headers: this.getAuthHeader(),
        })
        await this.fetchWishlist()
        toast.error('Removed from wishlist successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        this.error = err.response?.data?.message
      }
    },
  },
})

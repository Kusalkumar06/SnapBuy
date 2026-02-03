import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useCartStore } from './cartStore'
import { useWishlistStore } from './wishlistStore'

const API_URL = import.meta.env.VITE_API_BASE_URL

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: Cookies.get('SnapBuyToken') || null,
    loading: false,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    getAuthHeader: (state) => {
      return state.token ? { Authorization: `Bearer ${state.token}` } : {}
    },
  },
  actions: {
    async login(credentials) {
      this.loading = true

      try {
        const res = await axios.post(`${API_URL}/auth/login`, credentials)
        const token = res.data.token

        Cookies.set('SnapBuyToken', token, { expires: 7, path: '/' })

        this.token = token
        this.user = res.data.user

        const cartStore = useCartStore()
        const wishlistStore = useWishlistStore()
        cartStore.fetchCart()
        wishlistStore.fetchWishlist()

        return res.data.message || 'Login successful!'
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || 'Login failed. Please try again.'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async register(data) {
      this.loading = true
      try {
        const res = await axios.post(`${API_URL}/auth/register`, data)

        return res.data.message || 'Registration successful!'
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || 'Registration failed. Please try again.'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    logout() {
      Cookies.remove('SnapBuyToken', { path: '/' })
      this.user = null
      this.token = null

      const cartStore = useCartStore()
      const wishlistStore = useWishlistStore()
      cartStore.$reset()
      wishlistStore.$reset()
    },

    async forgotPassword(email) {
      this.loading = true
      try {
        const res = await axios.post(`${API_URL}/auth/forgot-password`, {
          email,
        })
        return res.data.message
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || 'Something went wrong. Please try again.'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async resetPassword(token, password) {
      this.loading = true
      try {
        const res = await axios.post(`${API_URL}/auth/reset-password/${token}`, {
          password,
        })
        return res.data.message
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || 'Failed to reset password. Please try again.'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async verifyEmail(token) {
      this.loading = true
      try {
        const res = await axios.post(`${API_URL}/auth/verify-email/${token}`)
        return res.data
      } catch (err) {
        console.log(err)
        const msg = err.response?.data?.message || 'Email verification failed.'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async updateProfile(details) {
      this.loading = true
      try {
        const res = await axios.put(`${API_URL}/user/profile`, details, {
          headers: this.getAuthHeader,
        })
        this.user = { ...this.user, ...res.data.user }
        return res.data.message || 'Profile updated successfully'
      } catch (err) {
        const msg = err.response?.data?.message || 'Failed to update profile'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async changePassword(passwords) {
      this.loading = true
      try {
        const res = await axios.put(`${API_URL}/user/password`, passwords, {
          headers: this.getAuthHeader,
        })
        return res.data.message || 'Password changed successfully'
      } catch (err) {
        const msg = err.response?.data?.message || 'Failed to change password'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async fetchUserProfile() {
      this.loading = true
      try {
        const res = await axios.get(`${API_URL}/user/me`, {
          headers: this.getAuthHeader,
        })
        this.user = res.data
        return res.data
      } catch (err) {
        const msg = err.response?.data?.message || 'Failed to fetch profile'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },

    async deleteAccount(password) {
      this.loading = true
      try {
        const res = await axios.delete(`${API_URL}/user/delete`, {
          data: { password },
          headers: this.getAuthHeader,
        })

        this.logout()
        return res.data.message || 'Account deleted successfully'
      } catch (err) {
        const msg = err.response?.data?.message || 'Failed to delete account'
        throw new Error(msg)
      } finally {
        this.loading = false
      }
    },
  },
})

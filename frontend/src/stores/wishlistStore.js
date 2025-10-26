import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useToast } from 'vue-toastification';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: [],
    loading: false,
    error: null,
  }),
  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken');
      return { Authorization: `Bearer ${token}` };
    },

    async fetchWishlist() {
      this.loading = true;
      try {
        const res = await axios.get('https://snapbuy-s5tb.onrender.com/wishlist/getWishList', {
          headers: this.getAuthHeader(),
        });
        this.wishlist = res.data.wishlist.items.map(i => i.product);
      } catch (err) {
        this.error = err.response?.data?.message || 'Error fetching wishlist';
      } finally {
        this.loading = false;
      }
    },

    async addToWishlist(productId) {
      const toast = useToast()
      try {
        await axios.post(
          'https://snapbuy-s5tb.onrender.com/wishlist/addToWishList',
          { productId },
          { headers: this.getAuthHeader() }
        );
        await this.fetchWishlist();
        toast.success('Added to wishlist successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        this.error = err.response?.data?.message;
      }
    },

    async removeFromWishlist(productId) {
      const toast = useToast()
      try {
        await axios.delete(
          `https://snapbuy-s5tb.onrender.com/wishlist/removeFromWishList/${productId}`,
          { headers: this.getAuthHeader() }
        );
        await this.fetchWishlist();
        toast.error('Removed from wishlist successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err) {
        this.error = err.response?.data?.message;
      }
    },
  },
});

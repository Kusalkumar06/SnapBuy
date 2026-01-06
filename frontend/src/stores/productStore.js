import axios from "axios";
import { defineStore } from "pinia";
import Cookies from 'js-cookie';
import { useToast } from 'vue-toastification';

export const useProductStore = defineStore('productStore',{
  state: () => ({
    productsList: [],
    loading: false,
    error: null,
    categories: [
      "Fashion & Apparel",
      "Electronics",
      "Home & Kitchen",
      "Beauty & Personal Care",
      "Sports & Fitness"
    ],
    categoryTexts: {
      "Electronics": "Smart tech, powerful performance, and everyday innovation",
      "Fashion & Apparel": "Style that speaks — trends crafted for every moment",
      "Home & Kitchen": "Thoughtfully designed essentials for modern living",
      "Beauty & Personal Care": "Care that enhances your natural confidence",
      "Sports & Fitness": "Gear up to move, train, and perform better"
    }
  }),

  getters: {
    getProductsByCategory: (state) => (category) => {
      return state.productsList.filter(product => product.category === category).slice(0, 4);
    },
    getProductById: (state) => (id) => {
      console.log(id)
      console.log(state.productsList.find(product => product._id === id))
      return state.productsList.find(product => product._id === id);
    },
    getRelatedProducts: (state) => (id,category) => {
      return state.productsList.filter(product => product._id !== id).filter(product => product.category === category).slice(0, 3);
    },
    getReviews: (state) => (id) => {
      return state.productsList.find(product => product._id === id).reviews;
    }
  },

  actions: {
    getAuthHeader() {
      const token = Cookies.get('SnapBuyToken')
      return token ? { Authorization: `Bearer ${token}` } : {}
    },
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const res = await axios.get("https://snapbuy-s5tb.onrender.com/product/getProducts/");
        this.productsList = res.data.products; 
      } catch (err) {
        this.error = err.response?.data?.message || "Failed to fetch products";
      } finally {
        this.loading = false;
      }
    },
    async addReview(details,id){
      const token = Cookies.get('SnapBuyToken')
      const toast = useToast()

      if (!token) {
        toast.error('Please login to add product to the cart.', {
          timeout: 2500,
          position: 'top-right',
        })
        return
      }

      this.loading = true;
      this.error = null;

      try {
        const res = await axios.post(`https://snapbuy-s5tb.onrender.com/product/${id}/addReview/`, details,{ headers: this.getAuthHeader() });

        this.fetchProducts()
        toast.success('Review added successfully!', {
          timeout: 1000,
          position: 'top-right',
        })
      } catch (err){
        console.log(err)
        const msg = err.response?.data?.message || "Error during adding review.";
        throw new Error(msg);
      } finally{
        this.loading = false;
      }
    }
  }

})
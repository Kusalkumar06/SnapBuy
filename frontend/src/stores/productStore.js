import axios from "axios";
import { defineStore } from "pinia";

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
      "Electronics": "Explore our electronics collection",
      "Fashion & Apparel": "Explore our fashion & apparel collection",
      "Home & Kitchen": "Explore our home & kitchen collection",
      "Beauty & Personal Care": "Explore our beauty & personal care collection",
      "Sports & Fitness": "Explore our sports & fitness collection"
    }
  }),

  getters: {
    getProductsByCategory: (state) => (category) => {
      return state.productsList.filter(product => product.category === category).slice(0, 4);
    }
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const res = await axios.get("https://snapbuy-s5tb.onrender.com/product/getProducts/");
         // your backend endpoint
        this.productsList = res.data.products; // assuming backend returns array of products
      } catch (err) {
        this.error = err.response?.data?.message || "Failed to fetch products";
      } finally {
        this.loading = false;
      }
    }
  }

})
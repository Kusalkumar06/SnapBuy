import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('productStore',()=>{
  const categories = ref([
    "Electronics",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Fitness"
  ])
  const categoryTexts = ref({
    "Electronics": "Explore our electronics collection",
    "Fashion & Apparel": "Explore our fashion & apparel collection",
    "Home & Kitchen": "Explore our home & kitchen collection",
    "Beauty & Personal Care": "Explore our beauty & personal care collection",
    "Sports & Fitness": "Explore our sports & fitness collection"
  })
  return {categories, categoryTexts}
})
<script setup>
  import ProductCard from "./ProductCard.vue";
  import { useProductStore } from "@/stores/productStore.js";

  const productStore = useProductStore();

  const { category } = defineProps({
    category: String,
  })
</script>

<template>
  <div v-if="!productStore.loading">
    <div class="flex flex-wrap justify-between gap-6">    
      <div  v-for="p in productStore.getProductsByCategory(category)" :key="p" >
        <ProductCard :productDetails="p"/>
      </div>
    </div>
  </div>
  <div v-else>
      <div class="flex justify-center items-center h-60">
        <div class="w-10 h-10 border-4 border-black dark:border-white border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
      </div>
  </div>
</template>
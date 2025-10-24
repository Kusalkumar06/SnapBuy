<script setup>
  import {onMounted } from "vue";
  import ProductCard from "./ProductCard.vue";
  import { useProductStore } from "@/stores/productStore.js";

  const productStore = useProductStore();

  onMounted(() => {
    productStore.fetchProducts();
  });

  const { category } = defineProps({
    category: String,
  })
</script>

<template>
  <div class="flex flex-wrap justify-between gap-6">
    <div v-for="p in productStore.getProductsByCategory(category)" :key="p" >
      <ProductCard :productDetails="p"/>
    </div>
  </div>
</template>
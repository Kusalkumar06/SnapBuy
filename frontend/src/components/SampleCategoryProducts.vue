<script setup>
  import { computed } from "vue";
import products from "../products.js"
import ProductCard from "./ProductCard.vue";
  // import { useProductStore } from "@/stores/productStore.js";

  // const productStore = useProductStore();

  let categoryProducts = computed(() => {
    return products.filter((each) => each.category === category).slice(0,4);
  })

  
  const { category } = defineProps({
    category: String,
  })
</script>

<template>
  <div class="flex flex-wrap justify-between gap-6">
    <div v-for="p in categoryProducts" :key="p" >
      <ProductCard :productDetails="p"/>
    </div>
  </div>
</template>
<template>
  <div class="px-5">
    <div>
      <h1 class="text-[28px] font-medium">Featured Collection</h1>
      <p class="text-[14px] text-zinc-600 font">Explore our handpicked selection of premium items</p>
    </div>

    <div v-if="paginatedProducts.length <=0">
      <div class="flex justify-center items-center h-60">
        <div class="w-10 h-10 border-4 border-black dark:border-white border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
    <div v-else>
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-5">
        <ProductCard v-for="product in paginatedProducts" :key="product._id" :productDetails="product"/>
      </div>


      <div class="flex justify-center items-center gap-2 mt-5">
        <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-1 border rounded"> Prev</button>
        <span>Page {{ currentPage }} / {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-1 border rounded"> Next </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { inject,computed,ref,watch } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  import ProductCard from '@/components/ProductCard.vue';



  const productStore = useProductStore();
  const filters = inject('filters');
  const currentPage = ref(1)
  const itemsPerPage = ref(6)

  watch(currentPage, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  
  const filteredProducts = computed(() => {
  let products = [...productStore.productsList]  // safe copy

  if (filters.category) {
    products = products.filter(p => p.category === filters.category)
  }

  products = products.filter(
    p => p.price >= (filters.minPrice || 0) && p.price <= (filters.maxPrice || Infinity)
  )

  if (filters.rating) {
    products = products.filter(p => p.rating >= filters.rating)
  }

  if (filters.search && filters.search.trim() !== '') {
    const query = filters.search.toLowerCase()
    products = products.filter(p => p.title.toLowerCase().includes(query))
  }

  if (filters.sortBy === 'asc') products.sort((a, b) => a.price - b.price)
  if (filters.sortBy === 'desc') products.sort((a, b) => b.price - a.price)

  return products
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage.value)
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})



</script>
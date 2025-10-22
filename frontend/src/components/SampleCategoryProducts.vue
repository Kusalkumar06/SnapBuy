<template>
  <div>
    <div class="relative mt-[100vh] bg-[#95662d]">
      <div class="container mx-auto py-16 px-30">
        <h2 class="text-3xl font-bold mb-8">Our Products</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <!-- Example Product -->
          <div v-for="p in products" :key="p" class="p-4 border rounded-lg shadow">
            <img :src="`${p.image}`" class="w-full h-80 object-cover mb-2 rounded-lg" />
            <h3 class="font-semibold">{{ p.title }}</h3>
            <p class="text-gray-600">$99.99</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import products from "../products.js"
</script>
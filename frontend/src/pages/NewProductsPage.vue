<script setup>
import { ref, computed } from 'vue';
import { newProducts, categoriesMap, subCategories } from '../newProducts.js';

const selectedCategory = ref('');
const selectedSubCategory = ref('');


const filteredProducts = computed(() => {
  return newProducts.filter(product => {
    const matchesCategory = selectedCategory.value ? product.category === selectedCategory.value : true;
    const matchesSubCategory = selectedSubCategory.value ? product.subCategory === selectedSubCategory.value : true;
    return matchesCategory && matchesSubCategory;
  });
});

const currentSubCategories = computed(() => {
  if (!selectedCategory.value) return [];
  const categoryKey = categoriesMap.find(c => c.id === selectedCategory.value)?.key;
  if (!categoryKey || !subCategories[categoryKey]) return [];
  
  // Convert the object { key: value } to array of { name: key, id: value }
  return Object.entries(subCategories[categoryKey]).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    id: value
  }));
});



const clearFilters = () => {
  selectedCategory.value = '';
  selectedSubCategory.value = '';
};

// Reset subcategory when category changes
const onCategoryChange = () => {
  selectedSubCategory.value = '';
};

const formatCurrency = (paise) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(paise / 100);
};

// Actions
import { Star, ShoppingCart, Heart } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';

const toast = useToast();

const addToCart = (product) => {
  toast.success(`Added ${product.title} to Cart (Simulated)`);
};

const addToWishlist = (product) => {
  toast.info(`Added ${product.title} to Wishlist (Simulated)`);
};

const descriptionProducts = computed(() => {
  return filteredProducts.value.filter((each) => each.description != "").length
})
const nonDescriptionProducts = computed(() => {
  return filteredProducts.value.filter((each) => each.description === "").length
})

console.log(newProducts.filter((each) => each.subCategory === "PUT Fashion category - men object ID here"))
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 class="text-3xl font-bold text-gray-900">Generated Products Preview ({{ filteredProducts.length }})</h1>
        <p>Descriptied Products :-{{ descriptionProducts }} and non Descriptied products :- {{ nonDescriptionProducts }}</p>
        <div class="flex gap-4">
          <select 
            v-model="selectedCategory" 
            @change="onCategoryChange"
            class="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">All Categories</option>
            <option v-for="cat in categoriesMap" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>

          <select 
            v-model="selectedSubCategory" 
            :disabled="!selectedCategory"
            class="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">All Subcategories</option>
            <option v-for="sub in currentSubCategories" :key="sub.id" :value="sub.id">
              {{ sub.name }}
            </option>
          </select>

          <button 
            @click="clearFilters"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Clear
          </button>
        </div>
      </div>
      
      <div class="space-y-12">
        <div v-for="(product, index) in filteredProducts" :key="product.id || index" class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <!-- Header -->
          <div class="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-start">
            <div>
              <h2 class="text-xl font-bold text-gray-900">{{ product.title }}</h2>
              <div class="mt-2 flex gap-4 text-sm text-gray-600">
                <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Slug: {{ product.slug }}</span>
                <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">Cat ID: {{ product.category }}</span>
                <span class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold">SubCat ID: {{ product.subCategory }}</span>
              </div>
            </div>
            <div class="text-right flex flex-col items-end gap-2">
              <div class="text-2xl font-bold text-green-600">{{ formatCurrency(product.basePriceInPaise) }}</div>
              
              <!-- Ratings -->
              <div class="flex items-center gap-1">
                <div class="flex">
                  <Star 
                    v-for="i in 5" 
                    :key="i" 
                    class="w-4 h-4" 
                    :class="i <= (product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'" 
                  />
                </div>
                <span class="text-xs text-gray-500">({{ product.numReviews || 0 }} reviews)</span>
              </div>

              <div class="text-sm text-gray-500">Stock: {{ product.totalStock }}</div>
              <div class="text-xs text-gray-400 uppercase tracking-wide">{{ product.brand }}</div>
              
              <!-- Actions -->
              <div class="flex gap-2 mt-2">
                <button 
                  @click="addToWishlist(product)"
                  class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  title="Add to Wishlist"
                >
                  <Heart class="w-5 h-5" />
                </button>
                <button 
                  @click="addToCart(product)"
                  class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <ShoppingCart class="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Images -->
            <div class="col-span-1">
              <div class="grid grid-cols-2 gap-2">
                <div v-for="(img, i) in product.images" :key="i" class="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                  <img :src="img" class="absolute inset-0 w-full h-full object-cover" alt="Product image" loading="lazy" />
                </div>
              </div>
            </div>

            <!-- Details -->
            <div class="col-span-1 lg:col-span-2 space-y-6">
              
              <!-- Description -->
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Description</h3>
                <p class="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{{ product.description }}</p>
              </div>

              <!-- Variants -->
              <div v-if="product.variants && product.variants.length > 0">
                <h3 class="font-semibold text-gray-900 mb-3">Variants ({{ product.variants.length }})</h3>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm text-left">
                    <thead class="bg-gray-50 text-gray-500 font-medium border-b">
                      <tr>
                        <th class="px-3 py-2">Size</th>
                        <th class="px-3 py-2">Color</th>
                        <th class="px-3 py-2">Price</th>
                        <th class="px-3 py-2">Stock</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="(variant, vIndex) in product.variants" :key="vIndex">
                        <td class="px-3 py-2 font-medium">{{ variant.size }}</td>
                        <td class="px-3 py-2">{{ variant.color }}</td>
                        <td class="px-3 py-2">{{ formatCurrency(variant.priceInPaise) }}</td>
                        <td class="px-3 py-2">{{ variant.stock }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Category Specifics -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div v-if="product.specifications" class="col-span-2">
                   <h3 class="font-semibold text-gray-900 mb-2">Specifications</h3>
                   <div class="grid grid-cols-2 gap-2">
                     <div v-for="(spec, sIndex) in product.specifications" :key="sIndex" class="flex justify-between text-sm border-b border-gray-200 pb-1">
                       <span class="text-gray-500">{{ spec.key }}</span>
                       <span class="font-medium text-gray-800">{{ spec.value }}</span>
                     </div>
                   </div>
                </div>

                <div v-if="product.dimensions">
                  <h3 class="font-semibold text-gray-900 mb-1">Dimensions</h3>
                  <p class="text-sm text-gray-600">
                    {{ product.dimensions.length }}x{{ product.dimensions.width }}x{{ product.dimensions.height }} {{ product.dimensions.unit }}
                  </p>
                </div>

                <div v-if="product.weight">
                  <h3 class="font-semibold text-gray-900 mb-1">Weight</h3>
                  <p class="text-sm text-gray-600">{{ product.weight.value }} {{ product.weight.unit }}</p>
                </div>

                <div v-if="product.warrantyMonths">
                  <h3 class="font-semibold text-gray-900 mb-1">Warranty</h3>
                  <p class="text-sm text-gray-600">{{ product.warrantyMonths }} Months</p>
                </div>

                <div v-if="product.expiryDate">
                  <h3 class="font-semibold text-gray-900 mb-1">Expiry</h3>
                  <p class="text-sm text-gray-600">{{ new Date(product.expiryDate).toLocaleDateString() }}</p>
                </div>

                <div v-if="product.batchNumber">
                  <h3 class="font-semibold text-gray-900 mb-1">Batch #</h3>
                  <p class="text-sm text-gray-600 font-mono">{{ product.batchNumber }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

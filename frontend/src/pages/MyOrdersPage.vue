<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B0C15] text-gray-900 dark:text-white transition-colors duration-300 font-sans py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold mb-8">My Orders</h1>


      <div v-if="orderStore.loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>


      <div v-else-if="orderStore.error" class="text-center py-20">
        <div class="text-red-500 text-xl mb-4">Failed to load orders</div>
        <p class="text-gray-500 dark:text-gray-400">{{ orderStore.error }}</p>
        <button @click="orderStore.fetchMyOrders()" class="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Try Again
        </button>
      </div>


      <div v-else-if="orderStore.orders.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">📦</div>
        <h2 class="text-2xl font-bold mb-2">No orders yet</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8">Looks like you haven't placed any orders yet.</p>
        <router-link to="/shop" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
          Start Shopping
        </router-link>
      </div>


      <div v-else class="space-y-4">
        <div v-for="order in orderStore.orders" :key="order._id" 
             @click="router.push(`/orders/${order._id}`)"
             class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-blue-500/30 transition-all cursor-pointer group">
          <div class="flex flex-col md:flex-row justify-between md:items-center gap-4">
            

            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="font-mono text-sm text-gray-400">#{{ order._id.slice(-6).toUpperCase() }}</span>
                <span :class="{
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': order.orderStatus === 'processing',
                  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400': order.orderStatus === 'shipped',
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': order.orderStatus === 'delivered',
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400': order.orderStatus === 'cancelled'
                }" class="px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                  {{ order.orderStatus }}
                </span>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(order.createdAt) }}</p>
            </div>


            <div class="flex flex-col md:items-end gap-1">
               <div class="text-lg font-bold">₹{{ order.totalPrice.toFixed(2) }}</div>
               <div class="text-xs flex items-center gap-1.5">
                 <span class="text-gray-400">Payment:</span>
                 <span :class="order.paymentStatus === 'paid' ? 'text-green-600 dark:text-green-400' : 'text-orange-500'" class="font-medium capitalize">
                   {{ order.paymentStatus }}
                 </span>
               </div>
            </div>


            <div class="hidden md:block text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/orderStore'

const router = useRouter()
const orderStore = useOrderStore()

onMounted(() => {
  orderStore.fetchMyOrders()
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B0C15] text-gray-900 dark:text-white transition-colors duration-300 font-sans py-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      

      <button @click="router.back()" class="flex items-center text-gray-500 hover:text-black dark:hover:text-white mb-6 transition-colors">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Orders
      </button>


      <div v-if="orderStore.loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>


      <div v-else-if="orderStore.error" class="text-center py-20">
        <div class="text-red-500 text-xl mb-4">Failed to load order details</div>
        <p class="text-gray-500 dark:text-gray-400 mb-4">{{ orderStore.error }}</p>
        <button @click="fetchDetails" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Retry
        </button>
      </div>


      <div v-else-if="orderStore.currentOrder" class="space-y-6">
        

        <div class="bg-white dark:bg-[#1A1D2D] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
          <div class="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-bold mb-1">Order Details</h1>
              <p class="text-gray-500 dark:text-gray-400 font-mono text-sm">#{{ orderStore.currentOrder._id }}</p>
            </div>
            <div class="flex flex-col items-end">
               <span :class="{
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': orderStore.currentOrder.orderStatus === 'processing',
                  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400': orderStore.currentOrder.orderStatus === 'shipped',
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': orderStore.currentOrder.orderStatus === 'delivered',
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400': orderStore.currentOrder.orderStatus === 'cancelled'
                }" class="px-3 py-1 rounded-full text-sm font-bold capitalize mb-2">
                  {{ orderStore.currentOrder.orderStatus }}
                </span>
                <p class="text-sm text-gray-500 dark:text-gray-400">Placed on {{ formatDate(orderStore.currentOrder.createdAt) }}</p>
            </div>
          </div>

          <div class="h-px bg-gray-100 dark:bg-gray-800 my-6"></div>


          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div v-if="orderStore.currentOrder.shippingAddress">
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Shipping Address</h3>
              <p class="font-bold text-lg mb-1">{{ orderStore.currentOrder.shippingAddress.name }}</p>
              <div class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <p>{{ orderStore.currentOrder.shippingAddress.address }}</p>
                <p>{{ orderStore.currentOrder.shippingAddress.city }}, {{ orderStore.currentOrder.shippingAddress.state }} - {{ orderStore.currentOrder.shippingAddress.pincode }}</p>
                <p class="mt-2 text-gray-500">Phone: {{ orderStore.currentOrder.shippingAddress.phone }}</p>
              </div>
            </div>


            <div>
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Payment Summary</h3>
              <div class="space-y-3">
                 <div class="flex justify-between">
                   <span class="text-gray-600 dark:text-gray-400">Method</span>
                   <span class="font-medium capitalize">{{ orderStore.currentOrder.paymentMethod }}</span>
                 </div>
                 <div class="flex justify-between">
                   <span class="text-gray-600 dark:text-gray-400">Status</span>
                   <span :class="orderStore.currentOrder.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-500'" class="font-medium capitalize">
                     {{ orderStore.currentOrder.paymentStatus }}
                   </span>
                 </div>
                  <div class="pt-2 border-t border-dashed border-gray-100 dark:border-gray-800/50 mt-2 space-y-2">
                    <div class="flex justify-between text-xs text-gray-500">
                      <span>Subtotal</span>
                      <span>₹{{ (
                        (Number(orderStore.currentOrder.totalAmountPaise) - 
                         Number(orderStore.currentOrder.taxPaise || 0) - 
                         Number(orderStore.currentOrder.shippingPaise || 0)) / 100
                      ).toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-xs text-gray-500">
                      <span>Tax (10%)</span>
                      <span>₹{{ (Number(orderStore.currentOrder.taxPaise || 0) / 100).toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-xs text-gray-500">
                      <span>Shipping</span>
                      <span>₹{{ (Number(orderStore.currentOrder.shippingPaise || 0) / 100).toFixed(2) }}</span>
                    </div>
                    <div class="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
                    <div class="flex justify-between items-end pt-1">
                      <span class="font-bold">Total Amount</span>
                       <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                         ₹{{ (Number(orderStore.currentOrder.totalAmountPaise || 0) / 100).toFixed(2) }}
                       </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <h2 class="text-lg font-bold pl-1">Items in Your Order</h2>
        <div class="space-y-4">
          <div v-for="item in orderStore.currentOrder.orderItems" :key="item._id" 
               class="bg-white dark:bg-[#1A1D2D] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 sm:items-center">
            
            <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shrink-0">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
            </div>

            <div class="flex-1">
              <h3 class="font-medium text-lg leading-tight mb-1">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Qty: {{ item.quantity }} × ₹{{ ((Number(item.pricePaise) || (Number(item.price) * 100) || 0) / 100).toFixed(2) }}
              </p>
            </div>

            <div class="sm:text-right">
              <p class="font-bold text-lg">
                ₹{{ ((Number(item.totalPricePaise) || (Number(item.price) * Number(item.quantity) * 100) || 0) / 100).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/orderStore'

const route = useRoute()
const router = useRouter()
const orderStore = useOrderStore()

const fetchDetails = () => {
  const orderId = route.params.id
  if (orderId) {
    orderStore.fetchOrderById(orderId)
  }
}

onMounted(() => {
  fetchDetails()
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

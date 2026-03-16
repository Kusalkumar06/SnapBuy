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
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': ['processing', 'pending_payment'].includes(orderStore.currentOrder.orderStatus),
                  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400': orderStore.currentOrder.orderStatus === 'shipped',
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': orderStore.currentOrder.orderStatus === 'delivered',
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400': ['cancelled', 'payment_failed', 'expired'].includes(orderStore.currentOrder.orderStatus)
                }" class="px-3 py-1 rounded-full text-sm font-bold capitalize mb-2">
                  {{ orderStore.currentOrder.orderStatus.replace('_', ' ') }}
                </span>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Placed on {{ formatDate(orderStore.currentOrder.createdAt) }}</p>
                <button
                  v-if="['pending_payment', 'payment_failed'].includes(orderStore.currentOrder.orderStatus) && orderStore.currentOrder.paymentMethod === 'Razorpay'"
                  @click="retryPayment"
                  class="px-5 py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  Retry Payment
                </button>
            </div>
          </div>

          <div v-if="!['cancelled', 'payment_failed', 'expired', 'pending_payment'].includes(orderStore.currentOrder.orderStatus)" class="mb-8 mt-6">
            <div class="flex items-center justify-between relative px-2">
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-gray-700 z-0"></div>
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 z-0 transition-all duration-500" :style="{ width: progressWidth }"></div>
              
              <div v-for="(step, index) in steps" :key="step.key" class="relative z-10 flex flex-col items-center">
                <div 
                  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-4 border-white dark:border-[#1A1D2D]"
                  :class="getCurrentStepIndex >= index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400 dark:bg-gray-700'"
                >
                  <svg v-if="getCurrentStepIndex > index" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <span class="text-[10px] sm:text-xs font-bold mt-2 capitalize whitespace-nowrap" :class="getCurrentStepIndex >= index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'">{{ step.label }}</span>
              </div>
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
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/orderStore'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const orderStore = useOrderStore()
const toast = useToast()

const fetchDetails = () => {
  const orderId = route.params.id
  if (orderId) {
    orderStore.fetchOrderById(orderId)
  }
}

onMounted(() => {
  fetchDetails()
})

const steps = [
  { key: 'placed', label: 'Placed' },
  { key: 'processing', label: 'Processing' },
  { key: 'shipped', label: 'Shipped' },
  { key: 'delivered', label: 'Delivered' }
];

const getCurrentStepIndex = computed(() => {
  return steps.findIndex(s => s.key === orderStore.currentOrder?.orderStatus);
});

const progressWidth = computed(() => {
  const index = getCurrentStepIndex.value;
  if (index <= 0) return '0%';
  if (index >= steps.length - 1) return '100%';
  return `${(index / (steps.length - 1)) * 100}%`;
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const retryPayment = async () => {
  try {
    const rzpData = await orderStore.createRazorpayOrder(orderStore.currentOrder._id);
    
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
      amount: rzpData.amount, 
      currency: "INR",
      name: "SnapBuy",
      description: "Secure Payment Retry",
      order_id: rzpData.rzpOrderId,
      handler: async function (response) {
        try {
          await orderStore.verifyRazorpayPayment({
            orderId: orderStore.currentOrder._id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          });
          toast.success("Payment successful!", { timeout: 3000, position: "top-right" });
          fetchDetails(); // Reload data
        // eslint-disable-next-line no-unused-vars
        } catch (_err) {
          toast.error("Payment verification failed.", { timeout: 3000 });
        }
      },
      prefill: {
        name: orderStore.currentOrder.shippingAddress?.name || "",
        contact: orderStore.currentOrder.shippingAddress?.phone || "",
      },
      theme: { color: "#3B82F6" },
      config: {
        display: {
          blocks: {
            banks: {
              name: 'All payment methods',
              instruments: [{ method: 'upi' }, { method: 'card' }, { method: 'wallet' }, { method: 'netbanking' }],
            },
          },
          sequence: ['block.banks'],
          preferences: { show_default_blocks: true },
        },
      }
    };

    const rzp1 = new window.Razorpay(options);
    // eslint-disable-next-line no-unused-vars
    rzp1.on('payment.failed', function (_response){
      toast.error("Payment failed. Please try again.", { timeout: 3000 });
      fetchDetails(); // Reload to pick up failed status
    });
    rzp1.open();
  } catch (err) {
    console.error("Retry Payment Error:", err);
    toast.error("Failed to initialize payment.", { timeout: 3000 });
  }
}
</script>

<template>
  <div>
    <div>
      <h1 class="text-[25px]">Customer Reviews</h1>
    </div>

    <div v-if="reviews.length === 0" class="text-gray-500 h-95 flex items-center justify-center">
      No reviews yet
    </div>

    <div v-else class="max-h-95 flex flex-col overflow-y-auto custom-scrollbar">
      <div v-for="review in reviews" :key="review.name" class="my-3 pr-3">
        <div class="flex items-center justify-between shadow-sm border border-gray-200 dark:border-gray-800 p-4 rounded-xl bg-white dark:bg-[#11131F] transition-all hover:shadow-md">
          <div class="flex gap-4 items-center">
            <div :class="`${colors[Math.floor(Math.random() * colors.length)]} w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl shadow-inner`">
              {{ review.name[0] }}
            </div>
            <div class="flex flex-col gap-0.5">
              <h1 class="text-[17px] font-bold text-gray-900 dark:text-white">{{ review.name }}</h1>
              <p class="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">{{ review.comment }}</p>
            </div>
          </div>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full border border-yellow-100 dark:border-yellow-900/30">
            <p class="text-sm font-bold text-yellow-700 dark:text-yellow-500 flex items-center gap-1">{{ review.rating }} <span class="text-xs">⭐</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-end pr-2 mt-8">
      <button class="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-xl transition-all active:scale-95 border border-white/10 dark:border-black/10" @click="isReviewOpen = true">
        Add a Review
      </button>
    </div>

    <div v-if="isReviewOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="isReviewOpen = false"></div>
      
      <!-- Modal -->
      <div class="relative bg-white dark:bg-[#0F111A] shadow-2xl rounded-3xl p-8 w-full max-w-md border border-gray-100 dark:border-gray-800 transition-all transform animate-in fade-in zoom-in duration-300">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Add a Review</h2>
          <button @click="isReviewOpen = false" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 dark:text-gray-400">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
          </button>
        </div>

        <form @submit.prevent="submitReview" class="space-y-6">
          <div>
            <label class="block mb-2 font-bold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider">Rating</label>
            <div class="relative">
              <select v-model="rating" class="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 w-full rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white">
                <option value="" disabled>How would you rate it?</option>
                <option v-for="n in 5" :key="n" :value="n">{{ n }} Stars {{ '⭐'.repeat(n) }}</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div>
            <label class="block mb-2 font-bold text-sm text-gray-700 dark:text-gray-400 uppercase tracking-wider">Your Experience</label>
            <textarea v-model="comment" rows="4" placeholder="Share your thoughts about the product..." class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 w-full rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white resize-none"></textarea>
          </div>

          <p v-if="errorMessage" class="text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-100 dark:border-red-900/30">{{ errorMessage }}</p>

          <div class="pt-2">
            <button type="submit" class="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:opacity-90 transition-all active:scale-[0.98]">
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useProductStore } from '@/stores/productStore';
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';

  const toast = useToast();
  const isReviewOpen = ref(false);
  const rating = ref("");
  const comment = ref("");
  const errorMessage = ref("");

  const productStore = useProductStore();

  const { productId } = defineProps({
    productId: String
  })

  const reviews = computed(() => {
      return productStore.getReviews(productId)
    }
  )

  const submitReview = async() => {
    if (!rating.value || !comment.value) {
      toast.error("Please fill in all fields", {
        timeout: 2500,
        position: "top-right",
      });
      return;
    }

    try {
    if (isReviewOpen.value) {
        await productStore.addReview({comment: comment.value, rating: rating.value},productId)

        isReviewOpen.value = false;
        rating.value = "";
        comment.value = "";
        errorMessage.value = "";
      }
    } catch (err) {
        errorMessage.value = err.message;
    } 
  }

  const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-violet-500",
  "bg-emerald-500"
];

</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}
</style>
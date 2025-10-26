<template>
  <div>
    <div>
      <h1 class="text-[25px]">Customer Reviews</h1>
    </div>

    <div v-if="reviews.length === 0" class="text-gray-500 h-80 flex items-center justify-center">
      No reviews yet
    </div>

    <div v-else class="max-h-80 flex flex-col overflow-y-auto">
      <div v-for="review in reviews" :key="review.name" class="my-4 pr-3">
        <div class="flex items-center justify-between shadow-lg border-1 border-zinc-300 p-3 rounded-md">
          <div class="flex gap-3 items-center">
            <div :class="`${colors[Math.floor(Math.random() * colors.length)]} text-4xl px-3 py-1 rounded-[50%] text-white`">
              {{ review.name[0] }}
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-[16px]">{{ review.name }}</h1>
              <p class="text-[13px] font">{{ review.comment }}</p>
            </div>
          </div>
          <div>
            <p>{{ review.rating }} ⭐</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-end pr-2">
      <button class="text-white px-4 py-2 rounded bg-[#95662d]" @click="isReviewOpen = true">Add a Review</button>
    </div>

    <div v-if="isReviewOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white shadow-md rounded-lg p-4 mt-6 w-80 h-80 ">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Add a Review</h2>
          <button @click="isReviewOpen = false">&times;</button>
        </div>
        <form @submit.prevent="submitReview">
          <div class="mb-4">
            <label class="block mb-1 font-medium">Rating</label>
            <select v-model="rating" class="border p-2 w-full rounded">
              <option value="">Select...</option>
              <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block mb-1 font-medium">Comment</label>
            <textarea v-model="comment" rows="2" class="border p-2 w-full rounded"></textarea>
          </div>

          <p >{{ errorMessage }}</p>

          <div class="text-center">
            <button type="submit" class="border-1  text-zinc-600  px-4 py-1 rounded hover:text-white hover:bg-zinc-700">Add</button>
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
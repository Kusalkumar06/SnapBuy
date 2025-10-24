<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
    <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
    <p class="text-lg text-muted-foreground mb-6">Oops! The page you're looking for doesn’t exist.</p>
    <button @click="router.push('/')" class="bg-[#95662d] text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors" > Go Back Home </button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>

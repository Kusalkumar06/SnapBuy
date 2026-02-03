<template>
  <div>
    <div class="bg-gray-100 dark:bg-black border-b dark:border-gray-800 px-30 transition-colors duration-300">
      <div class="mx-auto px-4 py-25">
        <h1 class="text-5xl font-bold text-black dark:text-white mb-4">About SnapBuy</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl font">
          Discover the story behind our brand and our journey from a small fashion store to a complete online marketplace.
        </p>
      </div>
    </div>

    <div class="px-30 py-16">
      <div class="flex justify-between gap-12 mb-16">
        <div class="w-[50%]">
          <h2 class="text-3xl font-bold text-black dark:text-white mb-4">Our Story</h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font">
            SnapBuy began as a small online fashion store, created with a single goal — to bring stylish, high-quality clothing
            to people who value comfort and creativity. What started as a passion project for fashion quickly grew into something much bigger.
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font">
            As our community expanded, we realized that customers wanted more than just fashion — they wanted a complete
            online shopping experience. So, we evolved into a full-fledged e-commerce platform, offering everything from
            fashion and beauty to electronics, home essentials, and lifestyle products.
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed font">
            Today, SnapBuy stands as a modern online destination that connects people to premium products across categories,
            while staying true to our original values — authenticity, quality, and customer trust.
          </p>
        </div>

        <div class="flex-1 rounded-lg h-96 overflow-hidden">
          <img src="https://www.48hourslogo.com/48hourslogo_data/2019/06/20/85800_1560969346.png" alt="SnapBuy Store" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="mb-16">
        <h2 class="text-[32px] font-bold mb-8 text-center text-black dark:text-white">Our Values</h2>
        <div class="flex justify-around">
          <div v-for="(value, index) in values" :key="index" class="w-[25%] rounded-lg p-6 text-center bg-gray-50 dark:bg-gray-900 border dark:border-gray-800">
            <h3 class="text-[18px] font-bold text-black dark:text-white mb-3">{{ value.title }}</h3>
            <p class="font text-gray-600 dark:text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>


    <div class="px-30 py-20 text-center bg-gray-100 dark:bg-black border-t dark:border-gray-800 transition-colors duration-300">
        <h2 class="text-2xl font-bold text-black dark:text-white mb-4">Get in Touch</h2>
        <p class="mb-6 text-gray-600 dark:text-gray-400"> Have questions or want to learn more about SnapBuy? We'd love to hear from you.</p>
        <router-link to="/contact">
          <button class="font-medium py-3 px-8 rounded-lg border bg-black text-white dark:bg-white dark:text-black border-black dark:border-white hover:opacity-90 transition" >Contact Us</button>
        </router-link>
      </div>
  </div>
</template>

<script setup>
const values = [
  {
    title: "Quality",
    description:
      "We believe in delivering only the best. Every product is handpicked and tested to meet our high standards.",
  },
  {
    title: "Sustainability",
    description:
      "We support ethical sourcing, responsible brands, and eco-friendly packaging across all categories.",
  },
  {
    title: "Customer Trust",
    description:
      "We focus on transparency, timely delivery, and excellent customer support to build lifelong relationships.",
  },
];
</script>

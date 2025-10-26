<template>
  <div>
    <div class="bg-[#f4efea] border-b px-30">
      <div class="mx-auto px-4 py-25">
        <h1 class="text-5xl font-bold text-foreground mb-4">About SnapBuy</h1>
        <p class="text-lg text-muted-foreground max-w-2xl font">
          Discover the story behind our brand and our journey from a small fashion store to a complete online marketplace.
        </p>
      </div>
    </div>

    <div class="px-30 py-16">
      <div class="flex justify-between gap-12 mb-16">
        <div class="w-[50%]">
          <h2 class="text-3xl font-bold text-foreground mb-4">Our Story</h2>
          <p class="text-muted-foreground leading-relaxed mb-4 font">
            SnapBuy began as a small online fashion store, created with a single goal — to bring stylish, high-quality clothing
            to people who value comfort and creativity. What started as a passion project for fashion quickly grew into something much bigger.
          </p>
          <p class="text-muted-foreground leading-relaxed mb-4 font">
            As our community expanded, we realized that customers wanted more than just fashion — they wanted a complete
            online shopping experience. So, we evolved into a full-fledged e-commerce platform, offering everything from
            fashion and beauty to electronics, home essentials, and lifestyle products.
          </p>
          <p class="text-muted-foreground leading-relaxed font">
            Today, SnapBuy stands as a modern online destination that connects people to premium products across categories,
            while staying true to our original values — authenticity, quality, and customer trust.
          </p>
        </div>

        <div class="flex-1 rounded-lg h-96 overflow-hidden">
          <img src="https://www.48hourslogo.com/48hourslogo_data/2019/06/20/85800_1560969346.png" alt="SnapBuy Store" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="mb-16">
        <h2 class="text-[32px] font-bold mb-8 text-center">Our Values</h2>
        <div class="flex justify-around">
          <div v-for="(value, index) in values" :key="index" class="w-[25%] rounded-lg p-6 text-center bg-[#f5f4f3]">
            <h3 class="text-[18px] font-bold text-foreground mb-3">{{ value.title }}</h3>
            <p class="font">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>


    <div class="px-30 py-20 text-center bg-[#f4efea] border-t">
        <h2 class="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p class="mb-6"> Have questions or want to learn more about SnapBuy? We'd love to hear from you.</p>
        <router-link to="/contact">
          <button class="font-[500] py-3 px-8 rounded-lg border" >Contact Us</button>
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

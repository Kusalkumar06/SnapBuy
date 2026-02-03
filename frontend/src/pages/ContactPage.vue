<template>
  <div class="min-h-screen">
    <div class=" py-20 px-30 bg-gray-100 dark:bg-black">
      <div class="text-center">
        <h1 class="text-[40px] font-bold mb-4 dark:text-white">Get in Touch</h1>
        <p class="text-black dark:text-gray-300 font">We'd love to hear from you. Send us a message!</p>
      </div>
    </div>

    <div class="px-30 py-12">
      <div class="flex gap-8 mb-12">
        <div class="flex flex-col gap-4 w-[30%]">
          <div v-for="(info, index) in contactInfo" :key="index" class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div class="flex items-start gap-4">
              <component :is="info.icon" class="w-6 h-6 text-black dark:text-white shrink-0 mt-1" />
              <div>
                <h3 class="font-medium text-lg mb-2 dark:text-white">{{ info.title }}</h3>
                <p v-for="(detail, i) in info.details" :key="i" class="text-gray-700 dark:text-gray-400 text-[14px]">{{ detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div class="p-8 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h2 class="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h2>

            <div v-if="submitted" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700" >Thank you for your message! We'll get back to you as soon as possible.</div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="flex gap-4">
                <div class="w-[50%]">
                  <label class="block text-[14px] font-medium mb-2 dark:text-gray-300">Name</label>
                  <input v-model="formData.name" type="text" required placeholder="Your name" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none dark:bg-gray-800 dark:text-gray-200" />
                </div>

                <div class="flex-1">
                  <label class="block text-[14px] font-medium mb-2 dark:text-gray-300">Email</label>
                  <input v-model="formData.email" type="email" required placeholder="your@email.com" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none dark:bg-gray-800 dark:text-gray-200"/>
                </div>
              </div>

              <div>
                <label class="block text-[14px] font-medium mb-2 dark:text-gray-300">Subject</label>
                <input v-model="formData.subject" type="text" required placeholder="How can we help?" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none dark:bg-gray-800 dark:text-gray-200"/>
              </div>

              <div>
                <label class="block text-[16px] font-medium mb-2 dark:text-gray-300">Message</label>
                <textarea v-model="formData.message" rows="5" required placeholder="Your message..." class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none dark:bg-gray-800 dark:text-gray-200"></textarea>
              </div>

              <button type="submit" class="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition" > Send Message </button>
            </form>
          </div>
        </div>
      </div>


      <div>
        <h2 class="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div class="flex flex-wrap justify-between gap-8">
          <div v-for="(faq, index) in faqs" :key="index" class="p-6 border border-gray-200 dark:border-gray-700 rounded-lg w-[45%]" >
            <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white"> {{ faq.question }} </h3>
            <p class="text-gray-700 dark:text-gray-400 font">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Mail, Phone, MapPin } from "lucide-vue-next"; 

const submitted = ref(false);

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "Mon - Fri, 9am - 6pm"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["snapbuy@yourstore.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Kapil Kavuri Hub", "Hyderabad, India"],
  },
];

const faqs = [
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via email, phone, or by filling out the contact form on this page.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, you can return a product within 7 days of delivery if it's unused and in original packaging.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-standard SSL encryption to protect all payment information.",
  },
];

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
  submitted.value = true;


  formData.value = { name: "", email: "", subject: "", message: "" };


  setTimeout(() => {
    submitted.value = false;
  }, 4000);
};
</script>

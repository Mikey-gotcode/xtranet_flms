<script setup>
import { ref } from 'vue';
import LoginHeaderBorder from '@/views/layouts/login-headerborder.vue'
import FaqBreadcrumb from '@/components/breadcrumb/faq-breadcrumb.vue'
import FooterOne from '@/views/layouts/layouts-footer.vue'


const activeFaq = ref(null);

const toggleFaq = (faqId) => {
  activeFaq.value = activeFaq.value === faqId ? null : faqId;
};
</script>


<template>
    <LoginHeaderBorder/>

    <FaqBreadcrumb/>

  <!-- Help Details -->
<div class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 mb-8">
        <div class="help-title">
          <h1 class="text-3xl font-bold mb-4">Most frequently asked questions</h1>
          <p class="text-gray-600">
            Here are the most frequently asked questions you may check before getting started
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 mb-8">
        <!-- FAQ -->
        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqone')">
              Is there a 14-days trial?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqone'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>

        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqtwo')">
              How much time I will need to learn this app?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqtwo'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>

        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqthree')">
              Is there a month-to-month payment option?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqthree'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>
        <!-- /FAQ -->
      </div>

      <div class="w-full lg:w-1/2 mb-8">
        <!-- FAQ -->
        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqfour')">
              What’s the benefits of the Premium Membership?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqfour'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>

        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqfive')">
              Are there any free tutorials available?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqfive'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>

        <div class="faq-card bg-white p-6 rounded-lg shadow-md mb-6">
          <h6 class="faq-title text-lg font-semibold">
            <button class="w-full text-left" @click="toggleFaq('faqsix')">
              How can I cancel my subscription plan?
            </button>
          </h6>
          <div v-show="activeFaq === 'faqsix'" class="faq-detail mt-4">
            <p class="text-gray-600">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </p>
            <p class="text-gray-600">
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
            </p>
          </div>
        </div>
        <!-- /FAQ -->
      </div>
    </div>
  </div>
</div>
<!-- /Help Details -->

    <FooterOne/>
</template>

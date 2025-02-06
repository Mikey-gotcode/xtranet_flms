<script setup>
import LoginHeaderBorder from '@/views/layouts/login-headerborder.vue'
import SupportBreadcrumb from '@/components/breadcrumb/support-breadcrumb.vue'
import FooterOne from '@/views/layouts/layouts-footer.vue'

</script>



<template>
  <LoginHeaderBorder/>
  <SupportBreadcrumb/>

  <!-- Help Details -->
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="max-w-lg w-full bg-white shadow-xl rounded-2xl p-6">
      <h5 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Submit a Request</h5>
      <form action="#">
        <div class="mb-4">
          <label class="block text-gray-600 font-medium">First Name</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your first Name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your email address"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-600 font-medium">Subject</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your Subject"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-600 font-medium">Description</label>
          <textarea
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
            placeholder="Write down here"
            rows="4"
          ></textarea>
        </div>
        <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg w-full transition duration-300">
          Submit
        </button>
      </form>
    </div>
  </div>
  <!-- /Help Details -->

 <FooterOne/>
</template>

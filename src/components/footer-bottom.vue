<template>
  <!-- Footer Bottom -->
  <div class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4">
      <!-- Copyright -->
      <div class="flex justify-between items-center">
        <div class="flex space-x-6">
          <div class="privacy-policy">
            <ul class="flex space-x-4">
              <li><router-link to="/pages/term-condition" class="hover:text-blue-400">Terms</router-link></li>
              <li><router-link to="/pages/privacy-policy" class="hover:text-blue-400">Privacy</router-link></li>
            </ul>
          </div>
        </div>
        <div class="copyright-text text-sm">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} DreamsLMS. All rights reserved.</p>
        </div>
      </div>
      <!-- /Copyright -->
    </div>
  </div>
  <!-- /Footer Bottom -->
</template>

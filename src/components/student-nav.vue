<template>
  <ul class="flex space-x-6 items-center">
    <StudentMenu />
    <li class="hidden lg:block">
      <router-link to="/login" class="text-gray-700 hover:text-blue-600 transition-colors">
        Login / Signup
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import StudentMenu from '@/views/layouts/student-menu.vue';
</script>

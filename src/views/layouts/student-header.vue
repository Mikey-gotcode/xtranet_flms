<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <nav class="flex items-center justify-between px-6 py-4" :class="{ 'bg-gray-100': isSticky }">
      <div class="flex items-center space-x-4">
        <button @click="toggleSidebar" class="lg:hidden">
          <span class="block w-6 h-0.5 bg-black"></span>
          <span class="block w-6 h-0.5 bg-black mt-1"></span>
          <span class="block w-6 h-0.5 bg-black mt-1"></span>
        </button>
        <router-link to="/" class="flex items-center">
          <img src="@/assets/img/logo.svg" class="h-8" alt="Logo" />
        </router-link>
      </div>
      <div class="hidden lg:flex space-x-6">
        <StudentNav />
      </div>
      <div class="flex items-center space-x-4">
        <button @click="enableDarkMode" ref="darkModeToggle" class="text-gray-600 dark:text-gray-300">
          <i class="fa-solid fa-moon"></i>
        </button>
        <button @click="disableDarkMode" ref="lightModeToggle" class="text-gray-600 dark:text-gray-300">
          <i class="fa-solid fa-sun"></i>
        </button>
        <div class="relative">
          <button class="flex items-center">
            <img src="@/assets/img/user/user16.jpg" class="h-8 w-8 rounded-full" alt="User" />
          </button>
          <div class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
            <div class="px-4 py-2 border-b">
              <p class="font-semibold">Rolands R</p>
              <p class="text-gray-500 text-sm">Student</p>
            </div>
            <router-link to="/student/student-dashboard" class="block px-4 py-2 hover:bg-gray-100">Dashboard</router-link>
            <router-link to="/student/student-settings" class="block px-4 py-2 hover:bg-gray-100">Profile</router-link>
            <router-link to="/student/setting-student-subscription" class="block px-4 py-2 hover:bg-gray-100">Subscription</router-link>
            <router-link to="/" class="block px-4 py-2 hover:bg-gray-100">Logout</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" v-if="isSidebarOpen" @click="closeSidebar"></div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import StudentNav from '@/components/student-nav.vue';

const isSticky = ref(false);
const isSidebarOpen = ref(false);
const darkModeToggle = ref(null);
const lightModeToggle = ref(null);

const handleScroll = () => {
  isSticky.value = window.pageYOffset >= 100;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  document.documentElement.classList.toggle("menu-opened");
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
  document.documentElement.classList.remove("menu-opened");
};

const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.removeItem("darkMode");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") enableDarkMode();
});
</script>

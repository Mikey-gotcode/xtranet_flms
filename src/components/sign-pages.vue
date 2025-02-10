<template>
  <!-- Conditional Rendering for Different Routes -->
  <ul v-if="isHometwoRoute" class="flex space-x-4 items-center">
    <!-- Dark Mode Buttons -->
    <li>
      <div class="flex items-center space-x-2">
        <button @click="enableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-moon text-gray-700 dark:text-white"></i>
        </button>
        <button @click="disableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-sun text-gray-700 dark:text-white"></i>
        </button>
      </div>
    </li>
    <!-- Login and Sign Up Links -->
    <li>
      <router-link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
        Login
      </router-link>
    </li>
    <li>
      <router-link to="/register" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
        Sign Up
      </router-link>
    </li>
  </ul>

  <ul v-else-if="isHomethreeRoute" class="flex space-x-4 items-center">
    <!-- Dark Mode Buttons -->
    <li>
      <div class="flex items-center space-x-2">
        <button @click="enableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-moon text-gray-700 dark:text-white"></i>
        </button>
        <button @click="disableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-sun text-gray-700 dark:text-white"></i>
        </button>
      </div>
    </li>
    <!-- Login and Register Links -->
    <li>
      <router-link to="/" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
        Login
      </router-link>
    </li>
    <li>
      <router-link to="/register" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
        Register
      </router-link>
    </li>
  </ul>

  <ul v-else-if="isHomefourRoute" class="flex space-x-4 items-center">
    <!-- Dark Mode Buttons -->
    <li>
      <div class="flex items-center space-x-2">
        <button @click="enableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-moon text-gray-700 dark:text-white"></i>
        </button>
        <button @click="disableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-sun text-gray-700 dark:text-white"></i>
        </button>
      </div>
    </li>
    <!-- Login and Sign Up Links -->
    <li>
      <router-link to="/" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
        Login
      </router-link>
    </li>
    <li>
      <router-link to="/register" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
        Signup
      </router-link>
    </li>
  </ul>

  <ul v-else class="flex space-x-4 items-center">
    <!-- Dark Mode Buttons -->
    <li>
      <div class="flex items-center space-x-2">
        <button @click="enableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-moon text-gray-700 dark:text-white"></i>
        </button>
        <button @click="disableDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <i class="fa-solid fa-sun text-gray-700 dark:text-white"></i>
        </button>
      </div>
    </li>
    <!-- Sign In and Signup Links -->
    <li>
      <router-link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">
        Sign In
      </router-link>
    </li>
    <li>
      <router-link to="/register" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center">
        Signup
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isHometwoRoute = computed(() => route.path === "/home/index-two");
const isHomethreeRoute = computed(() => route.path === "/home/index-three");
const isHomefourRoute = computed(() => route.path === "/home/index-four");

const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.removeItem("darkMode");
};

onMounted(() => {
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
</script>

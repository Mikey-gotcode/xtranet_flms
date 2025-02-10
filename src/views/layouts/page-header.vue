<template>
  <!-- Header -->
  <header :class="$route.meta.headerClass">
    <div class="fixed top-0 left-0 w-full z-50">
      <nav
        class="flex items-center justify-between p-4 transition-all duration-300"
        :class="[
          $route.meta.NavbarClass, 
          { 
            'bg-transparent': !isSticky, 
            'bg-white/90 shadow-lg sticky-nav': isSticky 
          }
        ]"
      >
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex items-center">
            <!-- Mobile Button (Only Visible on Small Screens) -->
            <button
              id="mobile_btn"
              @click="toggleSidebar"
              class="focus:outline-none"
            >
              <span class="flex flex-col space-y-1">
                <span class="w-6 h-1 bg-gray-700"></span>
                <span class="w-6 h-1 bg-gray-700"></span>
                <span class="w-6 h-1 bg-gray-700"></span>
              </span>
            </button>

            <!-- Logo -->
            <router-link to="/" class="ml-4">
              <img src="@/assets/img/logo.svg" class="h-10" alt="Logo" />
            </router-link>
          </div>

          <!-- Desktop Navigation (Only visible on larger screens) -->
          <div v-if="isDesktop" class="md:flex items-center space-x-4">
            <Mainnav class="p-4"/>
          </div>

          <!-- Sign Pages on Desktop -->
          <Signpages v-if="isDesktop"/>
        </div>
      </nav>

      <!-- Mobile Sidebar (Visible when isSidebarOpen is true) -->
      <div v-if="isMobile" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeSidebar">
        <div
          class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50"
          :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="p-4 flex items-center justify-between border-b">
            <router-link to="/" class="w-32">
              <img src="@/assets/img/logo.svg" class="h-10" alt="Logo" />
            </router-link>
            <button @click="closeSidebar" class="focus:outline-none h-6 w-6">
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
          <Mainnav v-if="isMobile" class="p-4"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Mainnav from "@/components/main-nav.vue";
import Signpages from "@/components/sign-pages.vue";

const isSticky = ref(false);
const isSidebarOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);
const isDesktop = ref(!isMobile.value);

// Check viewport width for responsiveness
const checkViewportWidth = () => {
  isMobile.value = window.innerWidth < 768;
  isDesktop.value = !isMobile.value;
};

// Handle scroll for sticky navbar
const handleScroll = () => {
  isSticky.value = window.scrollY >= 100;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", checkViewportWidth);
  window.addEventListener("scroll", handleScroll);
  checkViewportWidth();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkViewportWidth);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Sticky Navbar Styles */
.sticky-nav {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px); /* Gives a frosted glass effect */
  transition: all 0.3s ease-in-out;
  z-index: 1000; /* Ensures it stays above other elements */
}
</style>

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
        <div class="container mx-auto flex items-center justify-between gap-8">
          <div class="flex items-center">
            <!-- Mobile Button (Only Visible on Small Screens) -->
            <button
              id="mobile_btn"
              @click="toggleSidebar"
              class="focus:outline-none md:hidden w-8 h-8" 
            >
              <span class="flex flex-col space-y-1">
                <span class="w-6 h-1 bg-gray-700"></span>
                <span class="w-6 h-1 bg-gray-700"></span>
                <span class="w-6 h-1 bg-gray-700"></span>
              </span>
            </button>

            <!-- Logo with dynamic size for different screen sizes -->
            <router-link to="/" class="ml-4">
              <img 
                src="@/assets/img/logo.svg" 
                :class="{'h-8': isMobile, 'h-10': !isMobile}" 
                alt="Logo" 
              />
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
            <!-- Close Button (Visible when sidebar is open) -->
            <button @click="closeSidebar" class="focus:outline-none h-6 w-6">
              <i class="fas fa-times text-xl"></i> <!-- Font Awesome Close Icon -->
            </button>
          </div>
          <Mainnav v-if="isSidebarOpen" class="p-4"/>
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
const isMobile = ref(false);
const isDesktop = ref(true);

// Check viewport width for responsiveness
const checkViewportWidth = () => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
    isDesktop.value = false;
  } else {
    isMobile.value = false;
    isDesktop.value = true;
  }
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

/* Mobile Styles */
#mobile_btn {
  display: block;
}

#mobile_btn:focus {
  outline: none;
}
</style>

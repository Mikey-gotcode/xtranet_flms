<template>
  <!-- Header -->
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300" :class="{ 'bg-gray-800 text-white': isSticky }">
    <div class="relative">
      <nav class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center">
          <button @click="toggleSidebar" class="md:hidden p-2">
            <span class="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-700"></span>
          </button>
          <router-link to="/home/" class="ml-4">
            <img src="@/assets/img/logo.svg" class="h-8" alt="Logo" />
          </router-link>
        </div>

        <!-- Main Navigation -->
        <div class="hidden md:block">
          <main-nav></main-nav>
        </div>

        <!-- Sign In / Sign Up -->
        <div class="hidden md:block">
          <sign-pages></sign-pages>
        </div>
      </nav>

      <!-- Sidebar Menu (Mobile) -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" :class="{ 'hidden': !isSidebarOpen }" @click="closeSidebar"></div>
      <div class="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300" :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }">
        <div class="flex items-center justify-between p-4 border-b">
          <router-link to="/home/" class="block">
            <img src="@/assets/img/logo.svg" class="h-8" alt="Logo" />
          </router-link>
          <button @click="closeSidebar" class="p-2 text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <main-nav></main-nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isSidebarOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.pageYOffset >= 100;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
};
</script>

<template>
  <!-- Header -->
  <header class="header header-page">
    <div class="header-fixed">
      <nav
        class="navbar navbar-expand-lg header-nav scroll-sticky"
        :class="{ 'bg-gray-800': isSticky }"
      >
        <div class="container mx-auto flex justify-between items-center py-4">
          <div class="navbar-header flex items-center">
            <a
              id="mobile_btn"
              href="javascript:void(0);"
              @click="toggleSidebar"
              class="block lg:hidden"
            >
              <span class="bar-icon flex flex-col space-y-1">
                <span class="h-1 w-6 bg-white"></span>
                <span class="h-1 w-6 bg-white"></span>
                <span class="h-1 w-6 bg-white"></span>
              </span>
            </a>
            <router-link to="/home/" class="navbar-brand logo">
              <img src="@/assets/img/logo.svg" class="h-8" alt="Logo" />
            </router-link>
          </div>
          
          <div class="main-menu-wrapper flex items-center justify-between w-full lg:w-auto">
            <div class="menu-header flex items-center justify-between w-full">
              <router-link to="/home/" class="menu-logo">
                <img src="@/assets/img/logo.svg" class="h-8" alt="Logo" />
              </router-link>
              <a
                id="menu_close"
                class="menu-close hidden lg:block text-white text-xl cursor-pointer"
                href="javascript:void(0);"
                @click="closeSidebar"
              >
                <i class="fas fa-times"></i>
              </a>
            </div>
            
            <!-- Main Navigation (Menu) -->
            <main-nav></main-nav>
          </div>
          
          <!-- Page Content -->
          <page-content></page-content>
        </div>
      </nav>
      
      <!-- Sidebar Overlay (for mobile) -->
      <div
        class="sidebar-overlay fixed inset-0 bg-black bg-opacity-50 z-40"
        :class="{ 'block': isSidebarOpen, 'hidden': !isSidebarOpen }"
        @click="closeSidebar"
      ></div>
    </div>
  </header>
  <!-- /Header -->
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
      const scroll = window.pageYOffset;

      if (scroll >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      document.documentElement.classList.toggle("menu-opened");
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      document.documentElement.classList.remove("menu-opened");
    },
  },
};
</script>

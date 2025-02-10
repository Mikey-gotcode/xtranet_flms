<template>
  <div class="w-full sm:w-1/4 lg:w-1/5">
    <div class="bg-white shadow-lg rounded-lg p-4">
     
      <!-- Sidebar Navigation -->
      <div v-if="sidebarData.length > 0" class="mt-6">
        <div v-for="section in sidebarData" :key="section.title">
          <!-- <h3 class="text-gray-700 font-semibold mb-2">{{ section.title }}</h3> -->
          <ul>
                  <li v-for="item in section.items" :key="item.route"
          :class="{ 'bg-blue-500 text-white': isActive(item.route) }"
          class="p-2 rounded-md transition hover:bg-blue-100 hover:text-black">
        <router-link v-if="item.route" :to="item.route" class="flex items-center space-x-2 text-gray-700">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </li>

          </ul>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 mt-6">
        No navigation data available.
      </div>

    </div>
  </div>
</template>

<script>
import sidebarData from '@/assets/json/sidebar.json';

export default {
  data() {
    return {
      sidebarData: sidebarData || [], // Ensure it's always an array
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
  mounted() {
    console.log('Sidebar Data:', this.sidebarData);
    console.log('Current Route:', this.$route.path);
  }
};
</script>

<style scoped>
/* Optional: Ensuring the sidebar isn't hidden */
.hidden { display: block !important; }

ul, li, .router-link {
  visibility: visible !important;
  opacity: 1 !important;
}

</style>

<template>
  <div class="flex items-center space-x-4">
    <!-- Dark/Light Mode Toggle -->
    <div class="flex items-center space-x-2">
      <button @click="enableDarkMode" class="text-gray-700 dark:text-white">
        <i class="fa-solid fa-moon"></i>
      </button>
      <button @click="disableDarkMode" class="text-gray-700 dark:text-white">
        <i class="fa-solid fa-sun"></i>
      </button>
    </div>

    <!-- Dynamic Menu Items -->
    <div v-for="(item, index) in menuItems" :key="index" class="relative">
      <router-link :to="item.link" class="relative flex items-center">
        <img :src="item.icon" :alt="item.alt" class="w-6 h-6" />
      </router-link>

      <!-- Dropdown (if applicable) -->
      <div
        v-if="item.dropdown"
        class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50"
      >
        <div class="p-4 border-b dark:border-gray-600">
          <h3 class="font-semibold">{{ item.dropdownTitle }}</h3>
        </div>
        <ul>
          <li
            v-for="(dropdownItem, dIndex) in item.dropdown"
            :key="dIndex"
            class="hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2"
          >
            <router-link :to="dropdownItem.link" class="flex space-x-3">
              <img :src="dropdownItem.image" class="w-12 h-12 rounded" />
              <div class="flex-1">
                <h4 class="font-medium text-sm">{{ dropdownItem.title }}</h4>
                <p class="text-gray-500 dark:text-gray-400 text-xs">{{ dropdownItem.author }}</p>
                <p class="text-gray-700 dark:text-gray-300 font-bold text-sm">
                  ${{ dropdownItem.price }} 
                  <span class="line-through text-red-500 text-xs">${{ dropdownItem.originalPrice }}</span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- User Profile -->
    <div class="relative">
      <button @click="toggleDropdown" class="flex items-center space-x-2 focus:outline-none">
        <img
          src="@/assets/img/user/user11.jpg"
          alt="User Image"
          class="w-10 h-10 rounded-full border border-gray-300"
        />
        <span class="text-gray-700 dark:text-white hidden md:inline">Rolands R</span>
      </button>

      <!-- Dropdown -->
      <div v-if="showDropdown"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50"
      >
        <router-link to="/student/setting-edit-profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          Profile
        </router-link>
        <router-link to="/student/setting-student-subscription" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          Subscription
        </router-link>
        <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 text-red-500">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: Array,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    enableDarkMode() {
      document.documentElement.classList.add('dark');
    },
    disableDarkMode() {
      document.documentElement.classList.remove('dark');
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      alert("Logging out...");
    },
  },
};
</script>

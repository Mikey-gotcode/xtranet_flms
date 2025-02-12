<template>
  <div class="flex items-center bg-white border-t px-4 py-3 shadow-md">
    <form class="flex items-center w-full gap-x-3">
      <!-- Dropdown Menu -->
      <div class="relative">
        <button
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          @click="toggleDropdown"
        >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <!-- Dropdown Content -->
        <div
          v-if="dropdownOpen"
          class="absolute bottom-12 left-0 w-40 bg-white shadow-md rounded-lg z-10"
        >
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-file mr-2"></i> Document
          </a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-camera mr-2"></i> Camera
          </a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-image mr-2"></i> Gallery
          </a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-volume-full mr-2"></i> Audio
          </a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-map mr-2"></i> Location
          </a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-user-pin mr-2"></i> Contact
          </a>
        </div>
      </div>

      <!-- Emoji & Mic Buttons -->
      <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
        <i class="bx bx-smile"></i>
      </button>
      <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
        <i class="bx bx-microphone-off"></i>
      </button>

      <!-- Message Input -->
      <input
        type="text"
        class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message here..."
      />

      <!-- Send Button -->
      <button class="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
        <i class="bx bx-paper-plane"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

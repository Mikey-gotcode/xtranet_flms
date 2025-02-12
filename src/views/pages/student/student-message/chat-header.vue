<template>
  <div class="flex items-center justify-between bg-white shadow-md px-4 py-3 border-b">
    <!-- Left Section -->
    <div class="flex items-center gap-3">
      <!-- Back Button (Mobile Only) -->
      <button class="lg:hidden text-gray-500 hover:text-gray-700" @click="toggleChat">
        <i class="fas fa-arrow-left"></i>
      </button>

      <!-- User Avatar -->
      <figure class="w-10 h-10">
        <img
          :src="chatUser.avatar"
          class="w-full h-full rounded-full object-cover"
          alt="User"
        />
      </figure>

      <!-- User Info -->
      <div>
        <h5 class="text-sm font-semibold">{{ chatUser.name }}</h5>
        <small class="text-gray-500">{{ chatUser.lastSeen }}</small>
      </div>
    </div>

    <!-- Right Section (Chat Options) -->
    <div class="flex items-center gap-2">
      <!-- Search Button -->
      <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
        <i class="feather-search"></i>
      </button>

      <!-- More Options -->
      <div class="relative">
        <button
          class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          @click="toggleDropdown"
        >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <!-- Dropdown Content -->
        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg z-10">
          <button @click="closeChat" class="block w-full px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-x mr-2"></i>Close Chat
          </button>
          <button @click="muteNotification" class="block w-full px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-volume-mute mr-2"></i>Mute Notification
          </button>
          <button @click="deleteChat" class="block w-full px-4 py-2 text-sm hover:bg-gray-100">
            <i class="bx bx-trash mr-2"></i>Delete Chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      chatUser: {
        name: "Mark Villiams",
        avatar: "@/assets/img/user/user12.jpg",
        lastSeen: "Last seen at 07:15 PM",
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeChat() {
      console.log("Chat closed");
    },
    muteNotification() {
      console.log("Muted notifications");
    },
    deleteChat() {
      console.log("Chat deleted");
    },
  },
};
</script>

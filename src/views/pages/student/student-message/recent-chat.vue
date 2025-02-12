<template>
  <ul class="space-y-4">
    <li
      v-for="user in chatUsers"
      :key="user.id"
      class="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition"
    >
      <a href="javascript:void(0);" class="flex w-full items-center">
        <div class="relative w-12 h-12">
          <img
            :src="user.avatar"
            class="w-12 h-12 rounded-full object-cover"
            alt="User avatar"
          />
          <span
            v-if="user.online"
            class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
          ></span>
        </div>

        <div class="flex-1 ml-4">
          <div class="flex justify-between items-center">
            <h5 class="font-semibold text-gray-900">{{ user.name }}</h5>
            <small class="text-gray-500">{{ user.time }}</small>
          </div>
          <p class="text-sm text-gray-600 flex items-center">
            <i v-if="user.icon" :class="user.icon" class="mr-2"></i>
            {{ user.message }}
          </p>
        </div>

        <div v-if="user.unread" class="ml-3">
          <span
            class="flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full"
            >{{ user.unread }}</span
          >
        </div>
      </a>

      <div class="relative ml-2">
        <button @click="toggleDropdown(user.id)" class="text-gray-500 hover:text-gray-700">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <div
          v-if="dropdownOpen === user.id"
          class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md"
        >
          <span
            v-for="action in actions"
            :key="action.text"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            @click="handleAction(action.text)"
          >
            <i :class="action.icon" class="mr-2"></i> {{ action.text }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: null,
      chatUsers: [
        {
          id: 1,
          name: "Horace Keene",
          avatar: "@/assets/img/user/user11.jpg",
          message: "Have you called them?",
          time: "Just Now",
          unread: 5,
          online: true,
        },
        {
          id: 2,
          name: "Hollis Tran",
          avatar: "@/assets/img/user/user4.jpg",
          message: "Video",
          time: "Yesterday",
          icon: "bx bx-video",
          unread: 0,
          online: true,
        },
        {
          id: 3,
          name: "James Albert",
          avatar: "@/assets/img/user/user.jpg",
          message: "Project Tools.doc",
          time: "10:20 PM",
          icon: "bx bx-file",
          unread: 0,
          online: false,
        },
        {
          id: 4,
          name: "Debra Jones",
          avatar: "@/assets/img/user/user6.jpg",
          message: "Audio",
          time: "12:30 PM",
          icon: "bx bx-microphone",
          unread: 0,
          online: true,
        },
        {
          id: 5,
          name: "Dina Brown",
          avatar: "@/assets/img/user/user1.jpg",
          message: "Have you called them?",
          time: "Yesterday",
          unread: 0,
          online: false,
        },
        {
          id: 6,
          name: "Judy Mercer",
          avatar: "@/assets/img/user/user13.jpg",
          message: "Missed Call",
          time: "25/July/23",
          icon: "bx bx-phone-incoming",
          unread: 0,
          online: true,
        },
      ],
      actions: [
        { text: "Archive Chat", icon: "bx bx-archive-in" },
        { text: "Mute Notification", icon: "bx bx-volume-mute" },
        { text: "Delete Chat", icon: "bx bx-trash" },
        { text: "Pin Chat", icon: "bx bx-pin" },
        { text: "Mark as Unread", icon: "bx bx-check-square" },
        { text: "Block", icon: "bx bx-block" },
      ],
    };
  },
  methods: {
    toggleDropdown(userId) {
      this.dropdownOpen = this.dropdownOpen === userId ? null : userId;
    },
    handleAction(action) {
      console.log(`Action selected: ${action}`);
      this.dropdownOpen = null;
    },
  },
};
</script>

<style scoped>
/* Optional custom styling */
</style>

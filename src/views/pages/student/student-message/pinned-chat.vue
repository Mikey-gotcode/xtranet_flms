<template>
  <ul class="space-y-4">
    <li v-for="chat in pinnedChats" :key="chat.id" class="flex items-center justify-between p-3 bg-white shadow-md rounded-lg">
      <a href="javascript:void(0);" class="flex items-center space-x-3 w-full">
        <div class="relative">
          <img :src="require(`@/assets/img/user/${chat.image}`)" class="w-12 h-12 rounded-full" alt="User Image" />
          <span v-if="chat.status === 'online'" class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
        </div>
        <div class="flex-1">
          <h5 class="text-gray-800 font-semibold">{{ chat.name }}</h5>
          <p class="text-sm text-gray-500">
            <span v-if="chat.typing" class="flex items-center space-x-1">
              <span>Typing</span>
              <span class="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
              <span class="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
              <span class="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
            </span>
            <span v-else>{{ chat.message }}</span>
          </p>
        </div>
        <div class="flex flex-col items-end">
          <small class="text-gray-500">{{ chat.time }}</small>
          <div class="flex items-center space-x-1">
            <i v-if="chat.pinned" class="fa-solid fa-thumbtack text-gray-400"></i>
            <i v-if="chat.read" class="fa-solid fa-check-double text-blue-500"></i>
          </div>
        </div>
      </a>
      <div class="relative">
        <button @click="toggleMenu(chat.id)" class="text-gray-500 hover:text-gray-800">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div v-if="chat.showMenu" class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
          <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Archive Chat</span>
          <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mute Notification</span>
          <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Chat</span>
          <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Unpin Chat</span>
          <span class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mark as Unread</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import pinnedChatsData from "@/assets/json/pinned-chats.json";

const pinnedChats = ref(pinnedChatsData);

const toggleMenu = (id) => {
  pinnedChats.value = pinnedChats.value.map(chat =>
    chat.id === id ? { ...chat, showMenu: !chat.showMenu } : { ...chat, showMenu: false }
  );
};
</script>

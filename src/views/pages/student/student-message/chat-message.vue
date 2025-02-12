<template>
  <div class="space-y-4 px-4 py-2">
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="flex items-center"
      :class="message.isSender ? 'justify-end' : 'justify-start'"
    >
      <!-- Avatar for Received Messages -->
      <img
        v-if="!message.isSender"
        :src="message.avatar"
        class="w-8 h-8 rounded-full mr-2"
        alt="User Avatar"
      />

      <!-- Message Bubble -->
      <div
        class="p-3 rounded-lg max-w-md shadow-md"
        :class="message.isSender ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'"
      >
        <div class="flex justify-between items-center">
          <h6 class="text-sm font-semibold">
            {{ message.sender }}
            <span class="text-xs ml-2 opacity-75">{{ message.time }}</span>
          </h6>
          <button @click="toggleMenu(index)" class="text-gray-300 hover:text-gray-500">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>

        <div class="mt-2">
          <p v-if="message.type === 'text'">{{ message.content }}</p>
          <a v-if="message.type === 'link'" :href="message.content" class="text-blue-300 underline">
            {{ message.content }}
          </a>
          <img v-if="message.type === 'image'" :src="message.content" class="rounded-lg mt-2 w-full" />
          <div v-if="message.type === 'voice'" class="flex items-center space-x-2 mt-2">
            <button class="p-2 bg-gray-600 rounded-full">
              <i class="fa-solid fa-play text-white"></i>
            </button>
            <span class="text-sm">{{ message.duration }}</span>
          </div>
        </div>
      </div>

      <!-- Avatar for Sent Messages -->
      <img
        v-if="message.isSender"
        :src="message.avatar"
        class="w-8 h-8 rounded-full ml-2"
        alt="User Avatar"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import messagesData from "@/assets/json/message-data.json"; // Import message data

const messages = ref(messagesData);

const toggleMenu = (index) => {
  console.log("Show options for message:", index);
};
</script>

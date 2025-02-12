<template>
  <div class="top-online-contacts bg-white p-4 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h6 class="text-lg font-semibold text-gray-800">Online Now</h6>
      <a href="#" class="text-blue-500 hover:underline">View All</a>
    </div>

    <div class="overflow-x-auto">
      <div class="flex space-x-4">
        <div
          v-for="item in TopSlider"
          :key="item.id"
          class="flex-shrink-0 text-center"
        >
          <div class="relative w-16 h-16 rounded-full border-2 border-green-500 p-1">
            <a href="javascript:void(0);">
              <img
                :src="require(`@/assets/img/user/${item.Image}`)"
                alt="User Image"
                class="w-full h-full rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopSliderData from "@/assets/json/instructor-top-online.json";

const TopSlider = ref(TopSliderData);
</script>

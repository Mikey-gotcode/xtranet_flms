<template>
    <!-- Login Banner -->
    <div class="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
      <div class="relative w-full max-w-md">
        <div class="flex flex-col items-center">
          <!-- Login Image -->
          <div class="mb-6">
            <img src="@/assets/img/login-img.png" class="w-full h-auto" alt="Logo" />
          </div>
  
          <!-- Carousel Section -->
          <Carousel class="w-full">
            <Slide v-for="slide in 3" :key="slide">
              <div class="text-center space-y-4 p-6">
                <h2 class="text-2xl font-bold text-gray-800">
                  Welcome to <br />DreamsLMS Courses.
                </h2>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </Slide>
            <template #addons>
              <Pagination class="mt-4" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
    <!-- /Login Banner -->
  </template>
  
  <script setup>
  import { Carousel, Pagination, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  </script>
  
  <style scoped>
  /* Custom Styles for Tailwind Optimization (Optional) */
  </style>
  
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- course grid -->
    <div
      v-for="course in courses"
      :key="course.id"
      class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
    >
      <div class="relative">
        <router-link :to="`/course/${course.id}`">
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-48 object-cover"
          />
        </router-link>
        <div class="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
          <span>${{ course.discountPrice }}</span>
          <span class="line-through text-gray-300 ml-1">${{ course.originalPrice }}</span>
        </div>
      </div>
      <div class="p-4">
        <!-- Instructor Info -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-3">
            <router-link :to="`/instructor/${course.instructor.id}`">
              <img
                :src="course.instructor.image"
                alt="Instructor"
                class="w-10 h-10 rounded-full"
              />
            </router-link>
            <div>
              <h4 class="text-sm font-semibold text-gray-700">
                <router-link :to="`/instructor/${course.instructor.id}`">
                  {{ course.instructor.name }}
                </router-link>
              </h4>
              <p class="text-xs text-gray-500">Instructor</p>
            </div>
          </div>
          <button class="text-gray-500 hover:text-red-500">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <!-- Course Title -->
        <h3 class="text-lg font-semibold text-gray-800">
          <router-link :to="`/course/${course.id}`">
            {{ course.title }}
          </router-link>
        </h3>

        <!-- Course Info -->
        <div class="flex items-center justify-between text-gray-600 text-sm mt-2">
          <div class="flex items-center space-x-2">
            <img src="@/assets/img/icon/icon-01.svg" alt="Lessons" class="w-5 h-5" />
            <p>{{ course.lessons }}+ Lessons</p>
          </div>
          <div class="flex items-center space-x-2">
            <img src="@/assets/img/icon/icon-02.svg" alt="Duration" class="w-5 h-5" />
            <p>{{ course.duration }}</p>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex items-center mt-3">
          <div class="flex text-yellow-400">
            <i v-for="star in 5" :key="star" class="fas fa-star" :class="{ 'text-gray-300': star > course.rating }"></i>
          </div>
          <span class="text-gray-600 text-sm ml-2">
            {{ course.rating.toFixed(1) }} ({{ course.reviews }})
          </span>
        </div>
      </div>
    </div>
    <!-- course grid -->
  </div>
</template>
 <script setup>
import coursesData from "@/assets/json/coursetwo.json"
import { defineExpose,ref } from "vue";


const courses = ref(coursesData)
console.log("courses data:",courses.value)

defineExpose({
  courseCount:courses.value.length
})



</script>
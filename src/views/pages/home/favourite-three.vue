<template>
  <!-- Favourite Course -->
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto">
      <div class="mb-8 flex flex-wrap items-center justify-between">
        <h2 class="text-2xl font-semibold text-gray-800">Choose favourite Course from top Category</h2>
        <router-link
          to="/course/course-details"
          class="text-blue-500 flex items-center gap-2 hover:text-blue-700 transition"
        >
          See all
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>

      <Carousel
        class="w-full"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="course in coursethree" :key="course.name" class="p-4">
          <div class="bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
            <div class="w-16 h-16">
              <img
                class="w-full h-full object-cover"
                :src="require(`@/assets/img/category/${course.icon}`)"
                :alt="course.name"
              />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-700">{{ course.name }}</h3>
            <div class="mt-4">
              <p class="text-sm font-medium text-gray-500">Instructors</p>
              <ul class="flex items-center space-x-2 mt-2">
                <li v-for="n in 3" :key="n">
                  <a href="#" class="block w-8 h-8 rounded-full overflow-hidden border">
                    <img :src="`@/assets/img/profiles/avatar-0${n}.jpg`" alt="Instructor">
                  </a>
                </li>
                <li class="text-blue-500 font-semibold">80+</li>
              </ul>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- Courses -->
  <section class="py-16 bg-white">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-between mb-8">
        <h2 class="text-2xl font-semibold text-gray-800">Courses</h2>
        <a href="#" class="text-blue-500 flex items-center gap-2 hover:text-blue-700 transition">
          See all
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <div class="border-b border-gray-300 pb-4">
        <div class="flex space-x-4 overflow-x-auto">
          <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-md">All</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Most Popular</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Business</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Design</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Music</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Programming</a>
          <a href="#" class="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">Database</a>
        </div>
      </div>

      <coursestab-content></coursestab-content>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-blue-600 text-white">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-2/3">
          <h2 class="text-3xl font-semibold">Transform Access To Education</h2>
          <p class="mt-2 text-lg">Create an account to receive our newsletter, course recommendations, and promotions.</p>
        </div>
        <div class="w-full md:w-1/3 mt-4 md:mt-0">
          <router-link
            to="/register"
            class="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Get Started Now
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import coursethree from "@/assets/json/coursethree.json";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      coursethree: coursethree,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: { itemsToShow: 2, snapAlign: "center" },
        1024: { itemsToShow: 4, snapAlign: "start" },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>

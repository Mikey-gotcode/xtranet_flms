<template>
  <!-- Home Banner -->
  <section class="flex items-center justify-center py-24 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-h-[450px]">
          <div class="space-y-6">
            <div>
              <h5 class="text-blue-600 text-lg font-medium">The Leader in Online Learning</h5>
              <h1 class="text-4xl lg:text-5xl font-bold mt-2">Engaging <span class="text-blue-600">&</span> Accessible Online Courses For All</h1>
              <p class="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et</p>
            </div>
            <div class="mt-8">
              <form class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                  <input type="email" class="w-full px-4 py-3 border rounded-lg" placeholder="Search School, Online educational centers, etc" />
                </div>
                <select class="px-4 py-3 border rounded-lg">
                  <option>Select Category</option>
                  <option>Angular</option>
                  <option>Node Js</option>
                  <option>React</option>
                  <option>Python</option>
                </select>
                <button class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  <i class="fas fa-arrow-right">Search</i>
                </button>
              </form>
            </div>
          </div>
          <div class="hidden lg:block">
            <img src="@/assets/img/slider/home-slider.png" alt="Education illustration" class="w-3/4 h-fit mx-auto" />
          </div>
      </div>
      </div>
  </section>
  <!-- /Home Banner -->

  <!-- Online Courses -->
  <section class="py-24 bg-gray-100">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="flex flex-col items-center" data-aos="fade-up">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
              <img class="w-12 h-12" src="@/assets/img/icon-three/course-01.svg" alt="" />
            </div>
            <div class="text-center">
              <h4 class="text-blue-600 text-2xl font-semibold">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="1"
                  :delay="3"
                  :endAmount="10"
                  :duration="5"
                  :autoinit="true" />K
              </h4>
              <p>Online Courses</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center" data-aos="fade-up">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
              <img class="w-12 h-12" src="@/assets/img/icon-three/course-02.svg" alt="" />
            </div>
            <div class="text-center">
              <h4 class="text-yellow-500 text-2xl font-semibold">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="10"
                  :delay="3"
                  :endAmount="200"
                  :duration="5"
                  :autoinit="true" />+
              </h4>
              <p>Expert Tutors</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center" data-aos="fade-up">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
              <img class="w-12 h-12" src="@/assets/img/icon-three/course-03.svg" alt="" />
            </div>
            <div class="text-center">
              <h4 class="text-blue-400 text-2xl font-semibold">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="1"
                  :delay="3"
                  :endAmount="6"
                  :duration="5"
                  :autoinit="true" />K+
              </h4>
              <p>Certified Courses</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center" data-aos="fade-up">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
              <img class="w-12 h-12" src="@/assets/img/icon-three/course-04.svg" alt="" />
            </div>
            <div class="text-center">
              <h4 class="text-green-500 text-2xl font-semibold">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="1"
                  :delay="3"
                  :endAmount="60"
                  :duration="5"
                  :autoinit="true" />K+
              </h4>
              <p>Online Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Online Courses -->

  <!-- Master skills Career -->
  <section class="relative py-24">
    <div class="absolute top-0 right-0 w-1/4">
      <img class="w-full h-auto" src="@/assets/img/bg/pattern-01.png" alt="" />
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full px-4 mb-8" data-aos="fade-right">
          <div>
            <img class="w-full h-auto" src="@/assets/img/students/career.png" alt="image-banner" title="image-banner" />
          </div>
        </div>

        <div class="lg:w-1/2 w-full px-4 mb-8" data-aos="fade-left">
          <div class="text-left mb-6">
            <h2 class="text-3xl font-semibold text-gray-800">Master the skills to drive your career</h2>
          </div>
          <div class="mb-6">
            <p class="text-lg text-gray-600">
              Get certified, master modern tech skills, and level up your career whether
              you’re starting out or a seasoned pro. 95% of eLearning learners report our
              hands-on content directly helped their careers.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div
              v-for="(item, index) in skillsthree"
              :key="index"
              class="flex items-center space-x-4 mb-6"
              :data-aos="item.animation"
            >
              <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
                <img class="w-12 h-12" :src="require(`@/assets/img/icon-three/${item.iconSrc}`)" :alt="item.altText" />
              </div>
              <div>
                <p class="text-gray-700">{{
                  item.content
                }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Master skills Career -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import skillsthree from "@/assets/json/skillsthree.json";
export default {
  data() {
    return {
      Category: ["Select category", "Angular", "Node Js", "React", "Python"],
      skillsthree: skillsthree,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/course-list");
    },
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>

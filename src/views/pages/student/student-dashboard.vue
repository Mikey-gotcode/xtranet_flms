<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  <div class="page-content py-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-row h-full">
        <!-- Sidebar -->
        <div class="w-9/12 lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Main Content -->
        <div class="w-full lg:w-3/4 grid grid-rows-2 gap-8">
          <div class="flex flex-wrap justify-center gap-8">
            <div
              v-for="(item, index) in dashboardData"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-md text-center w-64"
            >
              <h5 class="text-lg font-semibold">{{ item.title }}</h5>
              <h2 class="text-3xl font-bold">{{ item.count }}</h2>
            </div>
          </div>
          <div class="mt-10 lg:w-full">
            <h4 class="text-xl font-bold">Recently Enrolled Courses</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div
                v-for="(course, index) in courses"
                :key="index"
                class="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-2 gap-0"
              >
                <div class="relative">
                  <router-link to="/course/course-details">
                    <img :src="course.image" alt="Course Image" class="w-full h-40 object-cover" />
                  </router-link>
                  <div class="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 rounded">{{ course.price }}</div>
                </div>
                <div class="p-4 gap-4">
                  <div class="flex items-center gap-7 justify-around">
                    <router-link to="/instructor/instructor-profile">
                      <img :src="course.instructorImage" class="w-10 h-10 rounded-full" alt="Instructor" />
                    </router-link>
                    <div>
                      <h4 class="font-semibold">{{ course.instructor }}</h4>
                      <p class="text-sm text-gray-500">Instructor</p>
                    </div>
                  </div>
                  <h3 class="mt-3 text-lg font-semibold">
                    <router-link to="/course/course-details">{{ course.title }}</router-link>
                  </h3>
                  <div class="flex justify-between text-sm text-gray-500 mt-2">
                    <p>{{ course.lessons }} Lessons</p>
                    <p>{{ course.duration }}</p>
                  </div>
                  <div class="flex items-center mt-2">
                    <div class="flex text-yellow-500">
                      <i v-for="star in Math.floor(course.rating)" :key="star" class="fas fa-star"></i>
                    </div>
                    <span class="text-sm ml-2">{{ course.rating }} ({{ course.reviews }})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterOne />
</template>

<script setup>
import { ref } from 'vue';

import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

const title = 'Student Dashboard';
const text = 'Home';
const text1 = 'Dashboard';

const dashboardData = ref([
  { title: 'Enrolled Courses', count: 12 },
  { title: 'Active Courses', count: 3 },
  { title: 'Completed Courses', count: 13 }
]);

const courses = ref([
  {
    title: 'WordPress for Beginners',
    image: '@/assets/img/course/course-02.jpg',
    price: '$80',
    instructor: 'Cooper',
    instructorImage: '@/assets/img/user/user2.jpg',
    lessons: '12+',
    duration: '70hr 30min',
    rating: 5.0,
    reviews: 20
  },
  {
    title: 'Sketch from A to Z',
    image: '@/assets/img/course/course-03.jpg',
    price: 'FREE',
    instructor: 'Jenny',
    instructorImage: '@/assets/img/user/user5.jpg',
    lessons: '10+',
    duration: '40hr 10min',
    rating: 3.0,
    reviews: 18
  },
  {
    title: 'Learn Angular Fundamentals',
    image: '@/assets/img/course/course-04.jpg',
    price: '$65',
    instructor: 'Nicole Brown',
    instructorImage: '@/assets/img/user/user4.jpg',
    lessons: '15+',
    duration: '80hr 40min',
    rating: 4.0,
    reviews: 10
  }
]);
</script>

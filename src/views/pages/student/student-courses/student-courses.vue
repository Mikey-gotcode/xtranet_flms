<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  
  <div class="page-content py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-row lg:flex-row gap-6">
        <!-- Sidebar -->
        <div class="w-9/12 lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Student Courses -->
        <div class="flex-1">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="border-b pb-4 mb-4">
              <h3 class="text-xl font-semibold">Enrolled Courses</h3>
            </div>
            
            <!-- Tab Navigation -->
            <div>
              <ul class="flex border-b">
                <li 
                  v-for="tab in tabs" 
                  :key="tab.id"
                  @click="selectedTab = tab.id"
                  class="mr-4 hover:cursor-pointer py-2 px-4 font-semibold transition-colors duration-300"
                  :class="selectedTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'"
                >
                  {{ tab.label }}
                </li>
              </ul>
            </div>
            
            <!-- Tab Content -->
            <div class="mt-4">
              <Enrolled_Courses v-if="selectedTab === 'enrolled'" ref="eCoursesNumb" />
              <Active_Courses v-if="selectedTab === 'active'" ref="aCoursesNumb" />
              <Complete_Courses v-if="selectedTab === 'completed'" ref="cCoursesNumb" />
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="mt-6 flex justify-between items-center">
            <p class="text-gray-700">Page 1 of 2</p>
            <ul class="flex space-x-2">
              <li class="bg-blue-600 text-white px-3 py-1 rounded-md">1</li>
              <li class="bg-gray-200 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md cursor-pointer">2</li>
              <li class="bg-gray-200 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md cursor-pointer">
                <i class="bx bx-chevron-right"></i>
              </li>
            </ul>
          </div>
        </div>
        <!-- /Student Courses -->
      </div>
    </div>
  </div>
  
  <FooterOne />
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

import Enrolled_Courses from '@/views/pages/student/student-courses/enrolled-courses.vue';
import Complete_Courses from '@/views/pages/student/student-courses/complete-courses.vue';
import Active_Courses from '@/views/pages/student/student-courses/active-courses.vue';

// Reactive State for Tab Selection
const selectedTab = ref('enrolled'); // Default active tab

// References for child components
const cCoursesNumb = ref(null);
const eCoursesNumb = ref(null);
const aCoursesNumb = ref(null);

// Tab Data (reactive)
const tabs = ref([
  { id: 'enrolled', label: 'Enrolled Courses (0)' },
  { id: 'active', label: 'Active Courses (0)' },
  { id: 'completed', label: 'Completed Courses (0)' }
]);

// Update course count after component is mounted
onMounted(() => {
  updateCourseCounts();
});

// Function to update course counts dynamically
const updateCourseCounts = () => {
  tabs.value = [
    { id: 'enrolled', label: `Enrolled Courses (${eCoursesNumb.value?.courseCount || 0})` },
    { id: 'active', label: `Active Courses (${aCoursesNumb.value?.courseCount || 0})` },
    { id: 'completed', label: `Completed Courses (${cCoursesNumb.value?.courseCount || 0})` }
  ];
};
</script>

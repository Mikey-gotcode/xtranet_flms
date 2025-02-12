<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  <div class="page-content">
    <div class="container mx-auto px-4 w-full">
      <div class="flex flex-row lg:flex-row gap-16">
        <!-- Sidebar (Left Panel) -->
        <div class="w-9/12 lg:w-1/4">
          <Studentsidebar />
        </div>

      <!-- Student Order History -->
  <div class="col-span-9">
    <div class="bg-white shadow-md rounded-lg p-6">
      <div class="border-b pb-4">
        <h3 class="text-xl font-semibold">Order History</h3>
      </div>
      <div class="mt-4">
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
        <div class="mt-6">
          <Today_History v-if="selectedTab === 'today'" :orders="todayOrders" />
          <Month_History v-if="selectedTab === 'month'" :orders="monthOrders" />
          <Year_History v-if="selectedTab === 'year'" :orders="yearOrders" />
        </div>
        <!-- /Tab Content -->
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-6">
      <p>Page 1 of 2</p>
      <div class="flex space-x-2">
        <button class="px-3 py-1 border rounded-md bg-blue-500 text-white">1</button>
        <button class="px-3 py-1 border rounded-md">2</button>
        <button class="px-3 py-1 border rounded-md">
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
    <!-- /Pagination -->
  </div>
  <!-- /Student Order History -->
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

import Today_History from '@/views/pages/student/student-order/today-history.vue'
import Month_History from '@/views/pages/student/student-order/month-history.vue'
import Year_History from '@/views/pages/student/student-order/year-history.vue'


const selectedTab = ref('today'); // Default active tab


const tabs = ref([
  { id: 'today', label: 'Todays Orders (0)' },
  { id: 'month', label: 'Monthly Orders (0)' },
  { id: 'year', label: 'Year Orders (0)' }
]);

// Define props for breadcrumb titles
defineProps({
  title: String,
  text: String,
  text1: String
});
</script>

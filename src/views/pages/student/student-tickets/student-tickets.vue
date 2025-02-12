<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />

  <div class="page-content py-8">
    <div class="container mx-auto">
      <div class="flex flex-row lg:flex-row gap-6">
        <!-- Sidebar -->
        <div class="w-full lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Student Tickets -->
        <div class="w-full lg:w-3/4">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="border-b pb-4">
              <h3 class="text-xl font-semibold">Support Tickets</h3>
            </div>

            <div class="flex flex-nowrap justify-center gap-4 my-6">
              <div class="bg-gray-100 p-4 rounded-md text-center shadow-sm">
                <h3 class="text-2xl font-bold">50</h3>
                <p class="text-gray-600">Total Tickets</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-md text-center shadow-sm">
                <h3 class="text-2xl font-bold">30</h3>
                <p class="text-gray-600">Opened Tickets</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-md text-center shadow-sm">
                <h3 class="text-2xl font-bold">20</h3>
                <p class="text-gray-600">Closed Tickets</p>
              </div>
            </div>

            <div class="flex justify-between items-center border-b pb-4">
              <div>
                <h3 class="text-lg font-semibold">Support Tickets</h3>
                <p class="text-gray-500">You can find all of your order invoices.</p>
              </div>
              <button
                class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                @click="openTicketModal"
              >
                Add New Ticket
              </button>
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

            <div class="mt-4">
              <All_Tickets v-if="selectedTab === 'all'" ref="eCoursesNumb" />
              <Open_Tickets v-if="selectedTab === 'open'" ref="eCoursesNumb" />
              <Inprogress_Tickets v-if="selectedTab === 'inProgress'" ref="aCoursesNumb" />
              <Close_Tickets v-if="selectedTab === 'close'" ref="cCoursesNumb" />
            </div>

            <!-- Pagination -->
            <div class="flex justify-between items-center mt-6">
              <p class="text-gray-600">Page 1 of 2</p>
              <div class="flex space-x-2">
                <a href="#" class="px-3 py-1 border rounded-md bg-blue-600 text-white">1</a>
                <a href="#" class="px-3 py-1 border rounded-md hover:bg-gray-100">2</a>
                <a href="#" class="px-3 py-1 border rounded-md hover:bg-gray-100">
                  <i class="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Support_Tickets_Modal />
  <FooterOne />
</template>
<script setup>
import { ref,onMounted } from 'vue';


import Support_Tickets_Modal from '@/components/support-tickets-modal.vue'
import Open_Tickets from '@/views/pages/student/student-tickets/open-tickets.vue'
import Close_Tickets from '@/views/pages/student/student-tickets/close-tickets.vue'
import Inprogress_Tickets from '@/views/pages/student/student-tickets/inprogress-tickets'
import All_Tickets from '@/views/pages/student/student-tickets/all-tickets.vue'

import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';



const title = 'Support Tickets';
const text = 'Home';
const text1 = 'Support Tickets';

const selectedTab = ref('all');


// Tab Data (reactive)
const tabs = ref([
  { id: 'open', label: 'Open Tickets (0)' },
  { id: 'close', label: 'Closed Tickets (0)' },
  { id: 'inProgress', label: 'In Progress (0)' },
  { id: 'all', label: 'All Tickets (0)' }
]);

//update ticket count
onMounted(() => {
  //updateCourseCounts();
});

// // Function to update course counts dynamically
// const updateCourseCounts = () => {
//   tabs.value = [
//     { id: 'enrolled', label: `Enrolled Courses (${eCoursesNumb.value?.courseCount || 0})` },
//     { id: 'active', label: `Active Courses (${aCoursesNumb.value?.courseCount || 0})` },
//     { id: 'completed', label: `Completed Courses (${cCoursesNumb.value?.courseCount || 0})` }
//   ];
// };
</script>

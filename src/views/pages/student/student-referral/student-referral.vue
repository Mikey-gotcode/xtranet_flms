<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  <div class="page-content py-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-row h-full">
        <!-- sidebar -->
        <div class="w-9/12 lg:w-1/4">
          <Studentsidebar />
        </div>
        <!-- /Sidebar -->

   <!-- Student Referral -->
<div class="w-full lg:w-3/4">
  <div class="bg-white shadow-md rounded-lg p-6">
    <div class="border-b pb-4">
      <h3 class="text-xl font-semibold">Referrals</h3>
    </div>
    <div class="py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-100 p-4 rounded-lg shadow">
          <h6 class="text-gray-600 text-sm">Net Earnings</h6>
          <h3 class="text-2xl font-bold">$12,000</h3>
          <p class="text-gray-500 text-sm">Earning this month</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow">
          <h6 class="text-gray-600 text-sm">Balance</h6>
          <h3 class="text-2xl font-bold">$15,000</h3>
          <p class="text-gray-500 text-sm">In the Wallet</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow">
          <h6 class="text-gray-600 text-sm">Avg Deal Size</h6>
          <h3 class="text-2xl font-bold">$2,000</h3>
          <p class="text-gray-500 text-sm">Earning this month</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow">
          <h6 class="text-gray-600 text-sm">No of Referrals</h6>
          <h3 class="text-2xl font-bold">10</h3>
          <p class="text-gray-500 text-sm">In this month</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h5 class="text-lg font-semibold">Your Referral Link</h5>
          <p class="text-gray-500 text-sm">
            You can earn easily money by copying and sharing the below link with your friends.
          </p>
          <div class="mt-4">
            <input 
              type="text" 
              class="w-full p-2 border border-gray-300 rounded-md text-gray-700"
              value="https://dreamslmscourse.com/reffer/?refid=345re667877k9" 
              readonly
            />
          </div>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Copy link
          </button>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6">
          <h5 class="text-lg font-semibold">Withdraw Money</h5>
          <ul class="list-disc pl-5 text-gray-500 text-sm space-y-2">
            <li>Withdraw money securely to your bank account.</li>
            <li>Commission is $25 per transaction under $10,000.</li>
          </ul>
          <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Withdraw Money
          </button>
        </div>
      </div>
    </div>
  </div>

  <Referral_Table />

  <!-- Pagination -->
  <div class="flex justify-between items-center mt-6">
    <p class="text-gray-500 text-sm">Page 1 of 2</p>
    <div class="flex space-x-2">
      <a href="#" class="px-3 py-1 bg-blue-500 text-white rounded">1</a>
      <a href="#" class="px-3 py-1 border border-gray-300 rounded">2</a>
      <a href="#" class="px-3 py-1 border border-gray-300 rounded">
        <i class="bx bx-chevron-right"></i>
      </a>
    </div>
  </div>
</div>
<!-- /Student Referral -->

      </div>
    </div>
  </div>
  <FooterOne />
</template>
<script setup>
//import { ref } from 'vue';

import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

import Referral_Table from '@/views/pages/student/student-referral/referral-table.vue'

const title = 'Referrals';
const text = 'Home';
const text1 = 'Dashboard';



</script>

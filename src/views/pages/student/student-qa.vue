<template>
   <Student_Header />
   <Student_Breadcrumb :title="title" :text="text" :text1="text1" />

  <div class="page-content py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-row h-full gap-6">
        <!-- Sidebar -->
        <div class="w-9/12 lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Student Q & A -->
        <div class="lg:col-span-9">
          <div class="bg-white shadow rounded-lg p-6">
            <div class="border-b pb-4 mb-4">
              <h3 class="text-xl font-semibold">Question & Answer</h3>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-gray-200">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="p-3 border border-gray-200">Question No</th>
                    <th class="p-3 border border-gray-200">Question</th>
                    <th class="p-3 border border-gray-200">Course</th>
                    <th class="p-3 border border-gray-200">Type</th>
                    <th class="p-3 border border-gray-200">Date</th>
                    <th class="p-3 border border-gray-200">Posted By</th>
                    <th class="p-3 border border-gray-200">Replies</th>
                    <th class="p-3 border border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr v-for="(question, index) in questions" :key="index" class="border-b hover:bg-gray-50">
                    <td class="p-3 border">{{ question.id }}</td>
                    <td class="p-3 border">{{ question.text }}</td>
                    <td class="p-3 border">{{ question.course }}</td>
                    <td class="p-3 border flex items-center gap-1">
                      <i class="bx" :class="question.icon"></i>
                      <a href="#" class="text-blue-500 hover:underline" data-bs-toggle="tooltip">
                        <i class="bx bxs-info-circle"></i>
                      </a>
                    </td>
                    <td class="p-3 border">{{ question.date }} <span class="block text-gray-500">{{ question.time }}</span></td>
                    <td class="p-3 border flex items-center gap-2">
                      <img :src="question.userImage" alt="User Image" class="w-8 h-8 rounded-full">
                      <span>{{ question.user }}</span>
                    </td>
                    <td class="p-3 border">{{ question.replies }}</td>
                    <td class="p-3 border space-x-3">
                      <a href="#" class="text-blue-500 hover:underline"><i class="bx bx-undo"></i> Reply</a>
                      <a href="#" class="text-green-500 hover:underline"><i class="bx bx-show"></i> View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-between items-center mt-6">
            <p class="text-gray-600">Page 1 of 2</p>
            <ul class="flex space-x-2">
              <li class="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer">1</li>
              <li class="px-3 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer">2</li>
              <li class="px-3 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer">
                <i class="bx bx-chevron-right"></i>
              </li>
            </ul>
          </div>
        </div>
        <!-- /Student Q & A -->
      </div>
    </div>
  </div>

  <FooterOne />
</template>

<script setup>

import { ref } from 'vue'
import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

const title = 'Question & Answer';
const text = 'Home';
const text1 = 'Question & Answer';

const questions = ref(
  [
        {
          id: "Q1",
          text: "AngularJS and Angular refer to the same framework.",
          course: "Learn Angular Fundamentals Beginners Guide",
          icon: "bxs-adjust",
          date: "March 24, 2024",
          time: "09:30 AM",
          user: "Thompson Hicks",
          userImage: "@/assets/img/user/user2.jpg",
          replies: 0,
        },
        {
          id: "Q2",
          text: "What is the purpose of Angular's NgIf directive?",
          course: "Learn Angular Fundamentals Beginners Guide",
          icon: "bx-check-double",
          date: "March 24, 2024",
          time: "09:30 AM",
          user: "James Schulte",
          userImage: "@/assets/img/user/user3.jpg",
          replies: 0,
        },
        {
          id: "Q3",
          text: "Observables are not part of Angular's HTTP module.",
          course: "Learn Angular Fundamentals Beginners Guide",
          icon: "bxs-adjust",
          date: "March 24, 2024",
          time: "09:30 AM",
          user: "Doris Hughes",
          userImage: "@/assets/img/user/user5.jpg",
          replies: 0,
        },
        {
          id: "Q4",
          text: "Which of the following is a valid way to bind data in Angular?",
          course: "Learn Angular Fundamentals Beginners Guide",
          icon: "bx-check-double",
          date: "March 24, 2024",
          time: "09:30 AM",
          user: "Arthur Nalley",
          userImage: "@/assets/img/user/user13.jpg",
          replies: 0,
        },
        {
          id: "Q5",
          text: "Angular applications can only be written in TypeScript.",
          course: "Learn Angular Fundamentals Beginners Guide",
          icon: "bxs-adjust",
          date: "March 24, 2024",
          time: "09:30 AM",
          user: "Shirley Lis",
          userImage: "@/assets/img/user/user8.jpg",
          replies: 0,
        },
      ]
)






</script>

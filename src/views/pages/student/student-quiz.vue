<template>
 <Student_Header />
 <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  <div class="page-content py-18 max-w-lg">
    <div class="container mx-auto px-4 w-full">
      <div class="flex flex-row lg:flex-row gap-16">
        <!-- Sidebar -->
        <div class="w-11/12 lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Student Quiz -->
            <div class="w-full md:w-3/4 mx-auto">
              <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">My Quiz Attempts</h3>
                
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-gray-100 text-gray-700">
                      <tr>
                        <th class="border px-4 py-2 text-left">Quiz Info</th>
                        <th class="border px-4 py-2">Questions</th>
                        <th class="border px-4 py-2">Total Marks</th>
                        <th class="border px-4 py-2">Correct</th>
                        <th class="border px-4 py-2">Incorrect</th>
                        <th class="border px-4 py-2">Earned Marks</th>
                        <th class="border px-4 py-2">Result</th>
                        <th class="border px-4 py-2">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(quiz, index) in quizes" :key="index" class="text-gray-800">
                        <td class="border px-4 py-2">
                          <p class="text-sm text-gray-600">{{ quiz.date }}</p>
                          <p class="text-sm font-semibold">Quiz</p>
                          <p class="text-sm"><span class="font-medium">Student:</span> {{ quiz.student }}</p>
                        </td>
                        <td class="border px-4 py-2 text-center">{{ quiz.questions }}</td>
                        <td class="border px-4 py-2 text-center">{{ quiz.totalMarks }}</td>
                        <td class="border px-4 py-2 text-center">{{ quiz.correct }}</td>
                        <td class="border px-4 py-2 text-center">{{ quiz.incorrect }}</td>
                        <td class="border px-4 py-2 text-center">{{ quiz.earnedMarks }}</td>
                        <td class="border px-4 py-2 text-center">
                          <span
                            :class="quiz.result === 'Pass' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                            class="px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {{ quiz.result }}
                          </span>
                        </td>
                        <td class="border px-4 py-2 text-center">
                          <router-link
                            to="/student/student-quiz-details"
                            class="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                          >
                            Details
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Pagination -->
                <div class="flex justify-between items-center mt-4">
                  <p class="text-gray-600">Page 1 of 2</p>
                  <div class="flex space-x-2">
                    <button class="px-3 py-1 bg-gray-200 text-gray-800 rounded">1</button>
                    <button class="px-3 py-1 bg-gray-100 text-gray-600 rounded">2</button>
                    <button class="px-3 py-1 bg-gray-200 text-gray-800 rounded">
                      <i class="bx bx-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        <!-- /Student Quiz -->
      </div>
    </div>
  </div>
  <FooterOne />
</template>
<script setup>
import {ref } from 'vue'

import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';
import quizAttempt from '@/assets/json/quiz-attempts.json'

const title = 'Student Dashboard';
const text = 'Home';
const text1 = 'Dashboard';

const quizes =ref(quizAttempt)
</script>

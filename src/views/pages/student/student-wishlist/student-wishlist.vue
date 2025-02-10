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


        <!-- Student Wishlist -->
        <div class="flex-1">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="border-b pb-4 mb-4">
              <h3 class="text-xl font-semibold">Wishlist{{ wCourseNumb }}</h3>
            </div>
            
            <div>
              <Wishlist_Grid ref="wCourseNumb" />
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
        <!-- /Student Wishlist -->
      </div>
    </div>
  </div>
  
  <FooterOne />
</template>

<script setup>
import { ref, onMounted } from 'vue';



import Wishlist_Grid from '@/views/pages/student/student-wishlist/wishlist-grid.vue';
import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

const title = "Wishlist";
const text = "Home";
const text1 = "Wishlist";

const wCourseNumb = ref(null)

onMounted(()=>{
  updateCourseCount()
})

const updateCourseCount=()=>{
  wCourseNumb.value=wCourseNumb.value.courseCount
  console.log(wCourseNumb.value)
}



</script>

<template>
  <Student_Header />
  <Student_Breadcrumb :title="title" :text="text" :text1="text1" />
  
  <div class="page-content py-10">
    <div class="container mx-auto">
      <div class="flex flex-row lg:flex-row gap-6">
        
        <!-- Sidebar -->
        <div class="lg:w-1/4">
          <Studentsidebar />
        </div>

        <!-- Reviews Section -->
        <div class="lg:w-3/4">
          <div class="bg-white shadow-md rounded-lg p-6">
            <h3 class="text-2xl font-semibold mb-4">Reviews</h3>

            <div v-for="review in reviews" :key="review.id" class="border-b last:border-b-0 py-4">
              <div class="flex items-start gap-4">
                <!-- Profile Image -->
                <div class="w-12 h-12 flex-shrink-0">
                  <img :src="review.image" alt="User Image" class="w-full h-full rounded-full object-cover">
                </div>

                <div class="flex-1">
                  <div class="flex justify-between items-center">
                    <div>
                      <h6 class="text-lg font-semibold"><a href="#" class="hover:text-blue-500">{{ review.name }}</a></h6>
                      <p class="text-sm text-gray-500">{{ review.date }}</p>
                    </div>

                    <!-- Rating -->
                    <div class="flex text-yellow-500">
                      <i v-for="star in 5" :key="star" :class="star <= review.rating ? 'fas fa-star' : 'far fa-star'"></i>
                    </div>
                  </div>

                  <p class="mt-2 text-gray-700">{{ review.comment }}</p>

                  <div class="mt-2 flex gap-4 text-blue-500 text-sm">
                    <a href="#" class="hover:underline">Edit</a>
                    <a href="#" class="hover:underline">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-between items-center mt-6">
            <p class="text-gray-500">Page 1 of 2</p>
            <ul class="flex gap-2">
              <li class="px-3 py-1 bg-blue-500 text-white rounded-md cursor-pointer">1</li>
              <li class="px-3 py-1 bg-gray-200 rounded-md cursor-pointer">2</li>
              <li class="px-3 py-1 bg-gray-200 rounded-md cursor-pointer">
                <i class="bx bx-chevron-right"></i>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

  <FooterOne />
</template>

<script setup>
import Student_Header from '@/views/layouts/student-header.vue';
import Student_Breadcrumb from '@/components/breadcrumb/student-breadcrumb.vue';
import Studentsidebar from '@/views/layouts/student-sidebar.vue';
import FooterOne from '@/views/layouts/layouts-footer.vue';

// Page Titles
const title = "Reviews";
const text = "Home";
const text1 = "Reviews";

// Reviews Data
const reviews = [
  {
    id: 1,
    name: "Ronald Richard",
    image: "@/assets/img/user/user16.jpg",
    date: "6 months ago",
    rating: 5,
    comment: "This is the second Photoshop course I have completed with Cristian. Worth every penny and highly recommended!"
  },
  {
    id: 2,
    name: "Donald Richard",
    image: "@/assets/img/user/user16.jpg",
    date: "8 months ago",
    rating: 4,
    comment: "I've been using this LMS for several months. The user interface is incredibly friendly and makes learning smooth."
  },
  {
    id: 3,
    name: "James Richard",
    image: "@/assets/img/user/user16.jpg",
    date: "9 months ago",
    rating: 4,
    comment: "Customer support is responsive and helpful. The platform is reliable with almost zero downtime."
  },
  {
    id: 4,
    name: "Daniel Richard",
    image: "@/assets/img/user/user16.jpg",
    date: "1 year ago",
    rating: 4,
    comment: "This LMS is extraordinary. It sets a new benchmark for digital education!"
  }
];
</script>

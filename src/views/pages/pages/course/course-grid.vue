<script setup>
import courseInfo from "@/assets/json/courseInfo.json";
import Page_Header from '@/views/layouts/page-header.vue'
import Coursegridbreadcrumb from '@/components/breadcrumb/coursegrid-breadcrumb.vue'
import Coursesidebar from '@/views/pages/pages/course/course-sidebar.vue'
import Coursegridfilter from '@/components/course-filter.vue'
import BlogPagination from '@/components/lms-pagination.vue'
import FooterOne from '@/views/layouts/layouts-footer.vue'
</script>

<template>
  <Page_Header />
  <Coursegridbreadcrumb />

  <!-- Course -->
  <section class="course-content py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-row -mx-4">
        
        <!-- Sidebar on the left side of the course grid -->
        <div class="lg:w-3/12 px-4">
          <Coursesidebar />
        </div>
        
        <!-- Course Grid Section (Column for Course Details) -->
        <div class="lg:w-full px-4">
          
          <!-- Course Filter and Grid -->
          <div class="row-span-2 mb-8">
            <div class="w-full mb-4 md:mb-0">
              <Coursegridfilter class="mb-6"/>
            </div>
            
            <div class="w-full md:w-3/4">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                <div 
                  class="lg:w-7/8 md:w-6/12 flex mb-8" 
                  v-for="courseItem in courseInfo.courses" 
                  :key="courseItem.id"
                >
                  <div class="course-box bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                    <div class="product">
                      <div class="product-img relative">
                        <router-link :to="courseItem.courseDetailsLink">
                          <img 
                            :src="courseItem.courseImage" 
                            :alt="courseItem.courseName" 
                            class="w-full h-48 object-cover" 
                          />
                        </router-link>
                        <div class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                          {{ courseItem.price }} 
                          <span class="line-through text-gray-300">
                            {{ courseItem.discountedPrice }}
                          </span>
                        </div>
                      </div>

                      <div class="product-content p-4">
                        <div class="course-group flex items-center justify-between mb-4">
                          <div class="course-group-img flex items-center">
                            <router-link v-if="courseItem.instructor" :to="courseItem.instructorProfileLink">
                              <img 
                                :src="courseItem.instructor?.profileImage || '/images/default-profile.png'" 
                                alt="Instructor" 
                                class="w-10 h-10 rounded-full object-cover" 
                              />
                            </router-link>
                            <div class="course-name ml-3">
                              <h4>
                                <router-link 
                                  v-if="courseItem.instructor" 
                                  :to="courseItem.instructorProfileLink" 
                                  class="text-lg font-semibold hover:text-blue-500"
                                >
                                  {{ courseItem.instructor?.name || "Unknown Instructor" }}
                                </router-link>
                              </h4>
                              <p class="text-sm text-gray-500">
                                {{ courseItem.instructor?.role || "N/A" }}
                              </p>
                            </div>
                          </div>
                          <div class="course-share flex items-center justify-center">
                            <a href="javascript:void(0);" class="text-gray-600 hover:text-red-500">
                              <i class="fa-regular fa-heart"></i>
                            </a>
                          </div>
                        </div>

                        <h3 class="title text-lg font-semibold mb-4">
                          <router-link :to="courseItem.courseDetailsLink" class="hover:text-blue-500">
                            {{ courseItem.courseName }}
                          </router-link>
                        </h3>

                        <div class="course-info flex items-center justify-between mb-4 text-sm text-gray-500">
                          <div class="rating-img flex items-center">
                            <img src="@/assets/img/icon/icon-01.svg" alt="" class="w-5 h-5 mr-2" />
                            <p>{{ courseItem.lessons }}</p>
                          </div>
                          <div class="course-view flex items-center">
                            <img src="@/assets/img/icon/icon-02.svg" alt="" class="w-5 h-5 mr-2" />
                            <p>{{ courseItem.duration }}</p>
                          </div>
                        </div>

                        <div class="rating flex items-center mb-4">
                          <i class="fas fa-star text-yellow-400 me-1" v-for="n in 4" :key="'star-' + n"></i>
                          <i class="fas fa-star text-gray-400 me-1"></i>
                          <span class="inline-block text-gray-500">
                            <span>{{ courseItem.rating }}</span> ({{ courseItem.totalReviews }})
                          </span>
                        </div>

                        <div class="all-inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-blue-500 hover:bg-blue-700 text-white">
                          <router-link :to="courseItem.checkoutLink" class="w-full text-center">
                            BUY NOW
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination Component centered -->
              <div class="flex justify-center mt-8">
                <BlogPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- /Course -->
  <FooterOne />
</template>

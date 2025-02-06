<template>
  <!-- Acheive you Goals  -->
  <section class="home-three-goals">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center py-16">
        <!-- Col -->
        <div class="xl:w-1/4 lg:w-full md:w-full w-full"  data-aos="fade-down">
          <div class="text-center xl:text-left">
            <h2  class="text-2xl font-bold">Acheive you Goals with DreamsLMS</h2>
          </div>
        </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="xl:w-1/4 lg:w-1/3 md:w-1/3 w-full" data-aos="fade-down">
          <div class="text-center">
            <div class="mx-auto w-20 h-20">
              <img src="@/assets/img/icon-three/ellipse-1.svg" alt="" />
            </div>
            <div class="mt-4">
              <h4 class ="text-xl font-semibold">
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="2000"
                    :delay="3"
                    :endAmount="253085"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p class="text-gray-600">Students Enrolled all over World</p>
            </div>
          </div>
        </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="xl:w-1/4 lg:w-1/3 md:w-1/3 w-full" data-aos="fade-down">
      <div class="text-center">
        <div class="mx-auto w-20 h-20">
          <img src="@/assets/img/icon-three/ellipse-2.svg" alt="" />
        </div>
        <div class="mt-4">
          <h4 class="text-xl font-semibold">
            <span class="counterUp">
              <vue3-autocounter
                class="counter"
                ref="counter"
                :startAmount="100"
                :delay="3"
                :endAmount="1205"
                :duration="5"
                :autoinit="true"
              />
            </span>
          </h4>
          <p class="text-gray-600">Total Courses on our Platform</p>
        </div>
      </div>
    </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="xl:w-1/4 lg:w-1/3 md:w-1/3 w-full" data-aos="fade-down">
      <div class="text-center">
        <div class="mx-auto w-20 h-20">
          <img src="@/assets/img/icon-three/ellipse-3.svg" alt="" />
        </div>
        <div class="mt-4">
          <h4 class="text-xl font-semibold">
            <span class="counterUp">
              <vue3-autocounter
                class="counter"
                ref="counter"
                :startAmount="10"
                :delay="3"
                :endAmount="56"
                :duration="5"
                :autoinit="true"
              />
            </span>
          </h4>
          <p class="text-gray-600">Countries of Students</p>
        </div>
      </div>
    </div>
        <!-- /Col -->
      </div>
    </div>
  </section>
  <!-- /Acheive you Goals  -->

 
  <!-- Accelerate cloud -->
<section class="relative py-16 bg-gray-900 text-white">
  <div class="container mx-auto px-4">
    <!-- Right Shapes -->
    <div class="absolute top-0 right-0">
      <img class="w-32" src="@/assets/img/bg/shape-1.png" alt="" />
      <img class="w-24" src="@/assets/img/bg/pattern-03.png" alt="" />
    </div>
    <!-- Left Shapes -->
    <div class="absolute bottom-0 left-0">
      <img class="w-24" src="@/assets/img/bg/pattern-02.png" alt="" />
      <img class="w-32" src="@/assets/img/bg/shape-2.png" alt="" />
      <img class="w-24" src="@/assets/img/bg/pattern-04.png" alt="" />
    </div>
    
    <div class="flex flex-row items-center justify-between mb-12" data-aos="fade-up">
      <div class="w-full lg:w-3/12">
        <h2 class="text-3xl font-bold">Accelerate cloud success with hands-on learning at Scaler</h2>
      </div>
      <div class="w-full lg:w-3/12">
        <p class="text-xl font-bold" >96% of eLearning for Business customers see improved results within six months. Whether you’re a team of 10 or 10,000, faster cloud fluency starts here.</p>
      </div>
    </div>
    
    <!-- Award Winning -->
    <div class="flex flex-wrap items-center mb-12" data-aos="fade-right">
      <div class="w-6/12 md:w-6/12 px-8" >
        <img class="w-full" src="@/assets/img/students/award-01.png" alt="image-banner" />
      </div>
      <div class="w-6/12 md:w-6/12 px-8" data-aos="fade-up">
        <div>
          <div class="flex items-center mb-4">
            <img class="w-10" src="@/assets/img/icon-three/award.svg" alt="certified" />
            <h2 class="text-xl font-semibold ml-2">Award Winning Course Management</h2>
          </div>
          <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <img class="w-5 mr-2" src="@/assets/img/icon-three/check-round-1.svg" alt="" />
              Lorem ipsum dolor sit amet
            </li>
            <li class="flex items-center">
              <img class="w-5 mr-2" src="@/assets/img/icon-three/check-round-1.svg" alt="" />
              Consectetur adipiscing elit
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Learn Anything -->
    <div class="flex flex-wrap items-center mb-12" data-aos="fade-up">
      <div class="w-6/12 md:w-6/12 px-8">
        <div>
          <div class="flex items-center mb-4">
            <img class="w-10" src="@/assets/img/icon-three/time.svg" alt="certified" />
            <h2 class="text-xl font-semibold ml-2">Learn anything from anywhere anytime</h2>
          </div>
          <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
      <div class="w-6/12 md:w-6/12 px-8 " data-aos="fade-up">
        <img class="w-full" src="@/assets/img/students/learn-anything.png" alt="image-banner" />
      </div>
    </div>
    
    <!-- Development Career -->
    <div class="flex flex-wrap items-center" data-aos="fade-right">
      <div class="w-6/12 md:w-6/12 px-8">
        <img class="w-full" src="@/assets/img/students/certification.png" alt="image-banner" />
      </div>
      <div class="w-6/12 md:w-6/12 px-8" data-aos="fade-up">
        <div>
          <div class="flex items-center mb-4">
            <img class="w-10" src="@/assets/img/icon-three/winning.svg" alt="certified" />
            <h2 class="text-xl font-semibold ml-2">Certification for solid development of your Career</h2>
          </div>
          <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Accelerate cloud -->

 

  <!-- Trending Courses  Three -->
  <section class="py-16">
  <div class="container mx-auto">
    <div class="text-center mb-8" data-aos="fade-up">
      <h2 class="text-3xl font-semibold text-gray-800">Most Trending Courses</h2>
    </div>

    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in acheivegoal" :key="item.courseTitle">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <!-- Course Content -->
          <div :class="item.bgClass" class="p-6 text-left">
            <div class="text-lg font-semibold text-blue-700">
              <router-link to="/course/course-details">{{ item.courseTitle }}</router-link>
            </div>
            <div class="mt-2">
              <router-link to="/course/course-details">
                <h3 class="text-xl font-medium text-gray-800">{{ item.courseName }}</h3>
                <p class="text-gray-600 mt-1">{{ item.courseDescription }}</p>
              </router-link>
            </div>

            <!-- Course Info -->
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center space-x-2">
                <img class="w-5 h-5" :src="require(`@/assets/img/icon-three/${item.studentIcon}`)" alt="student-icon" />
                <p class="text-gray-700 text-sm">{{ item.studentCount }} Students</p>
              </div>
              <div class="flex items-center text-gray-600 text-sm">
                <i class="fa-regular fa-clock mr-2"></i>
                <span>{{ item.duration }}</span>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="border-t px-6 py-4 flex justify-between items-center">
            <div class="text-lg font-semibold">
              <span class="text-red-500 line-through">{{ item.originalPrice }}</span>
              <span class="text-green-600 ml-2">{{ item.discountPrice }}</span>
            </div>
            <div>
              <router-link to="/course/course-details">
                <img class="w-10 h-10 rounded-full" :src="require(`@/assets/img/profiles/${item.instructorImage}`)" alt="Instructor" />
              </router-link>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Pagination -->
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</section>

  <!-- Feature Course -->

<section class="gallery-three">
  <div class="container mx-auto px-4">
    <div class="home-three-head section-header-title" data-aos="fade-up">
      <div class="flex flex-wrap items-center justify-between">
        <div class="lg:w-6/12 w-full px-2">
          <h2 class="text-2xl font-bold">Courses taught by real instructors</h2>
        </div>
        <div class="lg:w-6/12 w-full px-2 flex justify-end">
          <router-link to="/instructor/instructor-list" class="text-blue-600 hover:text-blue-800 flex items-center">
            See all <span class="ml-2"><i class="fas fa-arrow-right"></i></span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="courses-gallery-three mt-6">
      <div class="flex flex-column -mx-2">
        <!-- First Column -->
        <div class="lg:w-5/12 md:w-5/12 w-full px-2">
          <div class="grid grid-row-2 gap-2">
            <div class="gallery-three-img-item">
              <div class="relative">
                <img src="@/assets/img/gallery/gallery-1.jpg" alt="Instructor" class="w-full rounded-lg shadow-md" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-4 text-white rounded-lg">
                  <div>
                    <h6 class="font-bold">Patricia</h6>
                    <p>Node Js</p>
                  </div>
                  <router-link to="/instructor/instructor-list" class="text-white">
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="gallery-three-img-item">
              <div class="relative">
                <img src="@/assets/img/gallery/gallery-2.jpg" alt="Instructor" class="w-full rounded-lg shadow-md" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-4 text-white rounded-lg">
                  <div>
                    <h6 class="font-bold">Patricia</h6>
                    <p>Node Js</p>
                  </div>
                  <router-link to="/instructor/instructor-list" class="text-white">
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Second Column -->
        <div class="lg:w-3/12 md:w-3/12 w-full h-full px-2">
          <div class="grid grid-row-2 gap-2">
            <div class="relative">
              <img src="@/assets/img/gallery/gallery-5.jpg" alt="Instructor" class="w-full rounded-lg shadow-md" />
              <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-4 text-white rounded-lg">
                <div>
                  <h6 class="font-bold">Patricia</h6>
                  <p>Node Js</p>
                </div>
                <router-link to="/instructor/instructor-list" class="text-white">
                  <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Column -->
        <div class="lg:w-4/12 md:w-4/12 w-full px-2">
          <div class="grid grid-row-2 gap-2">
            <div class="gallery-three-img-item">
              <div class="relative">
                <img src="@/assets/img/gallery/gallery-6.jpg" alt="Instructor" class="w-full rounded-lg shadow-md" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center p-4 text-white rounded-lg mx-0 z-1" >
                  <div>
                    <h6 class="font-bold">Patricia</h6>
                    <p>Node Js</p>
                  </div>
                  <router-link to="/instructor/instructor-list" class="text-white">
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="gallery-three-img-item">
              <div class="relative">
                <img src="@/assets/img/gallery/gallery-7.jpg" alt="Instructor" class="w-full rounded-lg shadow-md" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-4 text-white rounded-lg">
                  <div>
                    <h6 class="font-bold">Patricia</h6>
                    <p>Node Js</p>
                  </div>
                  <router-link to="/instructor/instructor-list" class="text-white">
                    <i class="fas fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import acheivegoal from "@/assets/json/acheivegoal.json";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      acheivegoal: acheivegoal,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.2,
          snapAlign: "start",
        },
      },
    };
  },

  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>

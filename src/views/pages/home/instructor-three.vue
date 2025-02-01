<template>
  <!-- Become An Instructor -->
  <section class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div data-aos="fade-up">
          <h2 class="text-3xl font-bold text-gray-900">Become An Instructor</h2>
          <p class="text-gray-700 mt-2">
            Top instructors from around the world teach millions of students on
            DreamsLMS.
          </p>
        </div>
        <div class="text-right" data-aos="fade-up">
          <router-link
            to="/register"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Get Started Now
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- /Become An Instructor -->

  <!-- Leading Companies -->
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900" data-aos="fade-up">
          500+ Leading Universities And Companies
        </h2>
      </div>
      <div class="m-0 p-0" data-aos="fade-up">
        <Carousel
          :autoplay="2000"
          :loop="true"
          :wrap-around="true"
          :settings="settingsland"
          :breakpoints="breakpointsland"
        >
          <Slide
            v-for="item in landingcompany"
            :key="item.id"
            class="flex justify-center"
          >
            <div class="w-40">
              <img
                class="w-full h-auto"
                :src="require(`@/assets/img/${item.img}`)"
                alt=""
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- /Leading Companies -->

  <!-- Testimonial -->
  <section class="bg-gray-50 py-12 relative">
    <div class="max-w-7xl mx-auto px-4 relative">
      <div>
        <img
          class="absolute top-0 left-0 w-20"
          alt=""
          src="@/assets/img/bg/pattern-05.svg"
        />
        <img
          class="absolute top-0 right-0 w-20"
          alt=""
          src="@/assets/img/bg/pattern-06.svg"
        />
      </div>
      <div class="grid md:grid-cols-2 items-center">
        <div data-aos="fade-down">
          <h2 class="text-3xl font-bold text-gray-900">They Trusted Us</h2>
          <h4 class="text-lg text-gray-700 mt-2">
            We are very happy because we have happy customers.
          </h4>
          <router-link
            to="/instructor/instructor-profile"
            class="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            data-aos="fade-up"
          >
            View all Testimonials
          </router-link>
        </div>
        <div data-aos="fade-down">
          <div class="swiper-testimonial-three">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(slide, index) in swiperthree"
                :key="index"
              >
                <div class="bg-white shadow-md rounded-lg p-6">
                  <div class="flex items-center space-x-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      :src="require(`@/assets/img/profiles/${slide.avatar}`)"
                      alt=""
                    />
                    <div>
                      <h6 class="font-semibold text-gray-900">{{ slide.name }}</h6>
                      <p class="text-sm text-gray-600">{{ slide.profession }}</p>
                    </div>
                  </div>
                  <p class="mt-4 text-gray-700">{{ slide.content }}</p>
                  <div class="flex items-center mt-2">
                    <div class="flex space-x-1 text-yellow-400">
                      <i
                        v-for="(star, starIndex) in slide.ratings"
                        :key="starIndex"
                        class="fas fa-star"
                        :class="{ 'text-gray-300': starIndex >= slide.filledStars }"
                      ></i>
                    </div>
                    <p class="ml-2 text-gray-600">
                      {{ slide.rating }} <span>ratings</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-4">
              <button class="p-2 bg-gray-200 rounded-full">
                <i class="fas fa-arrow-left"></i>
              </button>
              <button class="p-2 bg-gray-200 rounded-full">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Testimonial -->

  <!-- Latest Blog -->
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900" data-aos="fade-up">
          Latest News & Events
        </h2>
        <router-link
          to="/blog/blog-list"
          class="text-blue-600 hover:underline"
        >
          See all <i class="fas fa-arrow-right ml-1"></i>
        </router-link>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="blog in blogthree" :key="blog.id" class="bg-gray-100 rounded-lg p-4">
          <div>
            <img
              class="w-full h-48 object-cover rounded-lg"
              :src="require(`@/assets/img/blog/${blog.image}`)"
              alt=""
            />
          </div>
          <div class="mt-4">
            <span class="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
              {{ blog.category }}
            </span>
            <router-link to="/blog/blog-list">
              <h5 class="mt-2 text-xl font-semibold text-gray-900">
                {{ blog.title }}
              </h5>
              <p class="text-gray-700 mt-1">{{ blog.description }}</p>
            </router-link>
            <div class="mt-2 text-sm text-gray-600">
              <i class="fa-solid fa-calendar-days"></i> {{ blog.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Latest Blog -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import landingcompany from "@/assets/json/landingcompany.json";
import swiperthree from "@/assets/json/swiperthree.json";
import blogthree from "@/assets/json/blogthree.json";
import blogsthree from "@/assets/json/blogsthree.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      landingcompany: landingcompany,
      swiperthree: swiperthree,
      blogsthree: blogsthree,
      blogthree: blogthree,
      settingsland: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpointsland: {
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
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
    // const swiper = new Swiper(".swiper-testimonial-three", {
    //   effect: "coverflow",
    //   loop: false,
    //   grabCursor: true,
    //   center: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   initialSlide: 2,
    //   navigation: {
    //     prevEl: ".slide-prev-btn",
    //     nextEl: ".slide-next-btn",
    //     speed: 400,
    //     spaceBetween: 100,
    //   },
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 10,
    //     slideShadows: true,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

    // this.$nextTick(() => {
    //   AOS.init();
    // });
    new Swiper(".swiper-testimonial-three", {
    effect: "coverflow",
    loop: false,
    grabCursor: true,
    center: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    navigation: {
      prevEl: ".slide-prev-btn",
      nextEl: ".slide-next-btn",
      speed: 400,
      spaceBetween: 100,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  this.$nextTick(() => {
    AOS.init();
  });
  },
};
</script>

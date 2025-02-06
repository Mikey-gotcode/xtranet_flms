<template>
  <div class="lg:w-full sticky top-0">
    <div class="p-4 bg-white shadow-md rounded-lg">
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xl font-semibold">
            <i class="feather-filter"></i> Filters
          </h4>
          <div @click="clearFilters" class="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
            <p>CLEAR</p>
          </div>
        </div>

        <!-- Course Categories Filter -->
        <div class="mb-4">
          <div class="p-4 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-lg font-medium">Course categories</h4>
              <i class="fas fa-angle-down"></i>
            </div>
            <div v-for="(category, index) in categories" :key="index" class="flex items-center mb-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="category.selected"
                  :value="category.name"
                  class="mr-2"
                />
                <span class="text-sm">{{ category.name }} ({{ category.count }})</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Instructors Filter -->
        <div class="mb-4">
          <div class="p-4 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-lg font-medium">Instructors</h4>
              <i class="fas fa-angle-down"></i>
            </div>
            <div v-for="(instructor, index) in instructors" :key="index" class="flex items-center mb-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="instructor.selected"
                  :value="instructor.name"
                  class="mr-2"
                />
                <span class="text-sm">{{ instructor.name }} ({{ instructor.count }})</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Price Filter -->
        <div class="mb-4">
          <div class="p-4 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-lg font-medium">Price</h4>
              <i class="fas fa-angle-down"></i>
            </div>
            <div v-for="(priceOption, index) in priceOptions" :key="index" class="flex items-center mb-2">
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="selectedPrice"
                  :value="priceOption.value"
                  class="mr-2"
                />
                <span class="text-sm">{{ priceOption.label }} ({{ priceOption.count }})</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Latest Posts -->
        <div class="p-4 bg-gray-100 rounded-lg shadow-sm">
          <div class="mb-4">
            <h4 class="text-lg font-medium">Latest Courses</h4>
          </div>
          <ul>
            <li v-for="(course, index) in latestCourses" :key="index" class="flex mb-4">
              <div class="mr-3">
                <router-link to="/course/course-details">
                  <img class="w-16 h-16 object-cover rounded-md" :src="course.image" :alt="course.title" />
                </router-link>
              </div>
              <div :class="{ 'text-green-600': course.price === 'FREE' }">
                <h4 class="text-sm font-semibold">
                  <router-link :to="course.link" class="hover:underline">{{ course.title }}</router-link>
                </h4>
                <p class="text-sm text-gray-500">{{ course.price }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: 'Backend', count: 3, selected: false },
        { name: 'CSS', count: 2, selected: false },
        { name: 'Frontend', count: 2, selected: false },
        { name: 'General', count: 2, selected: true },
        { name: 'IT & Software', count: 2, selected: true },
        { name: 'Photography', count: 2, selected: false },
        { name: 'Programming Language', count: 3, selected: false },
        { name: 'Technology', count: 2, selected: false },
      ],
      instructors: [
        { name: 'Keny White', count: 10, selected: false },
        { name: 'Hinata Hyuga', count: 5, selected: false },
        { name: 'John Doe', count: 3, selected: false },
        { name: 'Nicole Brown', count: 0, selected: true },
      ],
      priceOptions: [
        { label: 'All', value: 'all', count: 18 },
        { label: 'Free', value: 'free', count: 3 },
        { label: 'Paid', value: 'paid', count: 15 },
      ],
      selectedPrice: 'paid',
      latestCourses: [
        { image: '@/assets/img/blog/blog-01.jpg', title: 'Introduction LearnPress – LMS plugin', price: 'FREE', link: '/course/course-details' },
        { image: '@/assets/img/blog/blog-02.jpg', title: 'Become a PHP Master and Make Money', price: '$200', link: '/course/course-details' },
        { image: '@/assets/img/blog/blog-03.jpg', title: 'Learning jQuery Mobile for Beginners', price: 'FREE', link: '/course/course-details' },
        { image: '@/assets/img/blog/blog-01.jpg', title: 'Improve Your CSS Workflow with SASS', price: '$200', link: '/course/course-details' },
        { image: '@/assets/img/blog/blog-02.jpg', title: 'HTML5/CSS3 Essentials in 4-Hours', price: 'FREE', link: '/course/course-details' },
      ],
    };
  },
  methods: {
    clearFilters() {
      // Reset categories and instructors checkboxes to false
      this.categories.forEach(category => {
        category.selected = false;
      });
      this.instructors.forEach(instructor => {
        instructor.selected = false;
      });
      // Reset price selection
      this.selectedPrice = 'paid';
    },
  },
};
</script>

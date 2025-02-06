<template>
  <!-- Filter -->
  <div class="py-4">
    <div class="flex flex-wrap -mx-2">
      
      <!-- Left Section: View Icons & Result Count -->
      <div class="lg:w-6/12 px-2">
        <div class="flex items-center space-x-4">
          
          <!-- View Icons -->
          <div class="flex space-x-2">
            <router-link 
              :class="currentPath == 'course-grid' ? 'text-blue-600 bg-gray-200' : 'text-gray-500 hover:text-gray-700'"
              to="course-grid" 
              class="p-2 rounded-md transition"
            >
              <i class="feather-grid text-lg"></i>
            </router-link>
            <router-link 
              :class="currentPath == 'course-list' ? 'text-blue-600 bg-gray-200' : 'text-gray-500 hover:text-gray-700'"
              to="/course/course-list" 
              class="p-2 rounded-md transition"
            >
              <i class="feather-list text-lg"></i>
            </router-link>
          </div>
          
          <!-- Show Result -->
          <div>
            <h4 class="text-gray-700 text-sm">Showing 1-9 of 50 results</h4>
          </div>
        </div>
      </div>

      <!-- Right Section: Search & Filter -->
      <div class="lg:w-6/12 px-2">
        <div class="bg-gray-100 p-3 rounded-lg">
          <form action="#">
            <div class="flex flex-wrap -mx-2 items-center">
              
              <!-- Search Input -->
              <div class="md:w-6/12 px-2">
                <div class="relative">
                  <i class="feather-search absolute left-3 top-3 text-gray-500"></i>
                  <input 
                    type="text" 
                    class="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Search our courses" 
                  />
                </div>
              </div>

              <!-- Select Dropdown -->
              <div class="md:w-6/12 px-2">
                <div class="relative">
                  <vue-select 
                    :options="published" 
                    placeholder="Newly published" 
                    class="w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
  <!-- /Filter -->
</template>

<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
  data() {
    return {
      published: ["Newly published", "published 1", "published 2", "published 3"],
    };
  },
};
</script>

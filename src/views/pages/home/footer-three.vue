<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300 py-12">
    <!-- Footer Top -->
    <div class="max-w-7xl mx-auto px-4" data-aos="fade-up">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- About Section -->
        <div>
          <div class="mb-4">
            <img class="w-32" src="@/assets/img/logo/logo.png" alt="logo" />
          </div>
          <p class="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nulla
            gravida ut elit arcu egestas felis. Scelerisque at in magna dolor
            massa ipsum arcu lacus.
          </p>
          <h6 class="mt-4 text-lg font-bold text-white">Get Updates</h6>
          <form class="mt-2 flex">
            <input
              class="w-full p-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              type="text"
              placeholder="Enter your email here"
            />
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        <!-- For Instructor -->
        <div>
          <h6 class="text-lg font-bold text-white">For Instructor</h6>
          <ul class="mt-2 space-y-2">
            <li><router-link to="/instructor/instructor-profile" class="hover:text-gray-100">Profile</router-link></li>
            <li><router-link to="/" class="hover:text-gray-100">Login</router-link></li>
            <li><router-link to="/register" class="hover:text-gray-100">Register</router-link></li>
            <li><router-link to="/instructor/instructor-list" class="hover:text-gray-100">Instructor</router-link></li>
            <li><router-link to="/instructor/instructor-dashboard" class="hover:text-gray-100">Dashboard</router-link></li>
          </ul>
        </div>

        <!-- For Student -->
        <div>
          <h6 class="text-lg font-bold text-white">For Student</h6>
          <ul class="mt-2 space-y-2">
            <li><router-link to="/student/student-profile" class="hover:text-gray-100">Profile</router-link></li>
            <li><router-link to="/" class="hover:text-gray-100">Login</router-link></li>
            <li><router-link to="/register" class="hover:text-gray-100">Register</router-link></li>
            <li><router-link to="/student/students-list" class="hover:text-gray-100">Student</router-link></li>
            <li><router-link to="/student/student-dashboard" class="hover:text-gray-100">Dashboard</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="mt-8 border-t border-gray-700 pt-6 max-w-7xl mx-auto px-4" data-aos="fade-up">
      <div class="flex flex-col md:flex-row items-center justify-between text-sm">
        <!-- Social Icons -->
        <div class="flex gap-4">
          <h6 class="text-white">Connect Socially:</h6>
          <a href="javascript:;" class="text-gray-400 hover:text-white"><i class="feather-facebook"></i></a>
          <a href="javascript:;" class="text-gray-400 hover:text-white"><i class="feather-twitter"></i></a>
          <a href="javascript:;" class="text-gray-400 hover:text-white"><i class="feather-linkedin"></i></a>
          <a href="javascript:;" class="text-gray-400 hover:text-white"><i class="feather-youtube"></i></a>
        </div>

        <!-- Privacy Links -->
        <ul class="flex gap-4 mt-4 md:mt-0">
          <li><router-link to="/pages/term-condition" class="hover:text-gray-100">Terms & Condition</router-link></li>
          <li><router-link to="/pages/privacy-policy" class="hover:text-gray-100">Privacy Policy</router-link></li>
          <li><router-link to="/pages/support" class="hover:text-gray-100">Contact Us</router-link></li>
        </ul>

        <!-- Copyright -->
        <p class="mt-4 md:mt-0">&copy; {{ new Date().getFullYear() }} DreamsLMS. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- /Footer -->
</template>

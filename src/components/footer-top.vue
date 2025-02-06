<template>
    <!-- Footer Top -->
    <div class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
                <!-- Footer Widget 1 - Footer About -->
                <div class="space-y-4">
                    <div class="footer-logo">
                        <img src="@/assets/img/logo.svg" alt="logo" class="w-32">
                    </div>
                    <div class="footer-about-content">
                        <p class="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                    </div>
                </div>
                
                <!-- Footer Widget 2 - For Instructor -->
                <div class="space-y-4">
                    <h2 class="footer-title text-xl font-semibold">For Instructor</h2>
                    <ul class="space-y-2 text-gray-300">
                        <li><router-link to="/instructor/instructor-profile" class="hover:text-blue-400">Profile</router-link></li>
                        <li><router-link to="/" class="hover:text-blue-400">Login</router-link></li>
                        <li><router-link to="/register" class="hover:text-blue-400">Register</router-link></li>
                        <li><router-link to="/instructor/instructor-list" class="hover:text-blue-400">Instructor</router-link></li>
                        <li><router-link to="/instructor/instructor-dashboard" class="hover:text-blue-400">Dashboard</router-link></li>
                    </ul>
                </div>
                
                <!-- Footer Widget 3 - For Student -->
                <div class="space-y-4">
                    <h2 class="footer-title text-xl font-semibold">For Student</h2>
                    <ul class="space-y-2 text-gray-300">
                        <li><router-link to="/student/student-profile" class="hover:text-blue-400">Profile</router-link></li>
                        <li><router-link to="/" class="hover:text-blue-400">Login</router-link></li>
                        <li><router-link to="/register" class="hover:text-blue-400">Register</router-link></li>
                        <li><router-link to="/student/students-list" class="hover:text-blue-400">Student</router-link></li>
                        <li><router-link to="/student/student-dashboard" class="hover:text-blue-400">Dashboard</router-link></li>
                    </ul>
                </div>
                
                <!-- Footer Widget 4 - Newsletter & Contact -->
                <div class="space-y-4">
                    <h2 class="footer-title text-xl font-semibold">News letter</h2>
                    <div class="news-letter">
                        <form>
                            <input type="text" class="form-input w-full py-2 px-4 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400" placeholder="Enter your email address" name="email">
                        </form>
                    </div>
                    <div class="footer-contact-info space-y-4 mt-4">
                        <div class="footer-address flex items-start space-x-3">
                            <img src="@/assets/img/icon/icon-20.svg" alt="" class="w-6 h-6">
                            <p class="text-sm text-gray-300">3556 Beech Street, San Francisco,<br>California, CA 94108</p>
                        </div>
                        <p class="flex items-center text-sm text-gray-300 space-x-2">
                            <img src="@/assets/img/icon/icon-19.svg" alt="" class="w-6 h-6"> 
                            <span>dreamslms@example.com</span>
                        </p>
                        <p class="flex items-center text-sm text-gray-300 space-x-2">
                            <img src="@/assets/img/icon/icon-21.svg" alt="" class="w-6 h-6"> 
                            <span>+19 123-456-7890</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- /Footer Top -->
    </template>
    
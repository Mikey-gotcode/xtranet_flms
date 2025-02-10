<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <LoginBanner />

    <div class="w-full md:w-1/2 bg-white shadow-lg p-10 rounded-lg flex flex-col justify-center min-h-screen">
      <!-- Login -->
      <div class="login-wrapper">
        <div class="loginbox">
          <div class="w-full p-5 ">
            <div class="text-center">
              <img src="@/assets/img/logo.svg" class="max-w-xs mx-auto" alt="Logo" />
              <div class="text-right mt-4">
                <router-link to="/home/" class="text-blue-500 hover:underline">Back to Home</router-link>
              </div>
            </div>
            <h1 class="text-2xl font-semibold text-center my-4">Sign into Your Account</h1>

            <!-- Form -->
            <LoginForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
              <!-- Email Field -->
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-2">
                  <Field
                    name="email"
                    type="text"
                    v-model="form.email"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <div class="text-red-500 text-sm mt-1">{{ errors.email || emailError }}</div>
                </div>
              </div>

              <!-- Password Field with Toggle -->
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <div class="relative mt-2">
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="form.password"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <button
                    type="button"
                    @click="toggleShow"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                  >
                    <span v-if="showPassword">👁️</span>
                    <span v-else>👁️‍🗨️</span>
                  </button>
                  <div class="text-red-500 text-sm mt-1">{{ errors.password || passwordError }}</div>
                </div>
              </div>

              <!-- Forgot Password -->
              <div class="mb-4 text-right">
                <router-link to="forgot-password" class="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </router-link>
              </div>

              <!-- Remember Me -->
              <div class="flex items-center mb-4">
                <input type="checkbox" name="remember" class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                <label for="remember" class="ml-2 text-sm">Remember me</label>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="w-full py-3 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition">
                Sign In
              </button>
            </LoginForm>
          </div>
        </div>

        <!-- Social Login -->
        <div class="text-center mt-8">
          <span class="text-sm text-gray-600">Or sign in with</span>
          <div class="mt-4 flex justify-center space-x-4">
            <a href="#" class="flex items-center space-x-2 text-blue-500 hover:underline">
              <img src="@/assets/img/net-icon-01.png" class="h-6 w-6" alt="Google" />
              <span>Sign In using Google</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-blue-500 hover:underline">
              <img src="@/assets/img/net-icon-02.png" class="h-6 w-6" alt="Facebook" />
              <span>Sign In using Facebook</span>
            </a>
          </div>
          <p class="mt-4 text-sm">
            New User? <router-link to="register" class="text-blue-500 hover:underline">Create an Account</router-link>
          </p>
        </div>
      </div>
      <!-- /Login -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Form as LoginForm, Field } from "vee-validate";
import * as Yup from "yup";
import LoginBanner from "@/components/login-banner.vue";

const router = useRouter();
const showPassword = ref(false);
const emailError = ref("");
const passwordError = ref("");
const form = ref({ email: "", password: "" });

// Define the validation schema using Yup
const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

// Function to toggle password visibility
const toggleShow = () => {
  showPassword.value = !showPassword.value;
};

// Submit handler with improved validation logic
const onSubmit = (values) => {
  emailError.value = "";
  passwordError.value = "";

  let storedData = localStorage.getItem("storedData");
  if (!storedData) {
    localStorage.setItem("storedData", JSON.stringify([{ email: "example@dreamstechnologies.com", password: "123456" }]));
    storedData = localStorage.getItem("storedData");
  }

  const users = JSON.parse(storedData);
  const user = users.find((u) => u.email === values.email);

  if (!user) {
    emailError.value = "Email is not valid";
    return;
  }

  if (user.password !== values.password) {
    passwordError.value = "Incorrect password";
    return;
  }

  // Redirect to home on successful login
  router.push("/home/");
};
</script>

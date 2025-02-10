<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <LoginBanner/>
    <div class="w-full sm:w-96 bg-white p-8 rounded-lg shadow-lg">
      <!-- Sign Up Form -->
      <div class="text-center mb-6">
        <img src="@/assets/img/logo.svg" class="mx-auto mb-4" alt="Logo" />
        <router-link to="/home/" class="text-blue-500 text-sm">Back to Home</router-link>
        <h1 class="text-2xl font-semibold mt-4">Sign Up</h1>
      </div>

      <form @submit="onSubmit" class="space-y-4">
        <!-- Full Name -->
        <div>
          <label for="name" class="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-gray-700">Email</label>
          <Field
            name="email"
            type="email"
            id="email"
            class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            :class="{ 'border-red-500': errors.email }"
          />
          <div class="text-sm text-red-500 mt-1">{{ errors.email }}</div>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-gray-700">Password</label>
          <div class="relative">
            <input
              name="password"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              class="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              v-model="password"
              @input="handlePasswordChange"
            />
            <span @click="toggleShow" class="absolute right-3 top-3 cursor-pointer text-gray-500">
              <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </span>
          </div>
          <div class="text-sm text-red-500 mt-1">{{ errors.password }}</div>

          <!-- Password Strength -->
          <div v-if="password" class="mt-2 flex space-x-2">
            <span class="w-2.5 h-2.5 rounded-full" :class="strength === 'poor' ? 'bg-red-500' : 'bg-gray-300'"></span>
            <span class="w-2.5 h-2.5 rounded-full" :class="strength === 'weak' ? 'bg-yellow-500' : 'bg-gray-300'"></span>
            <span class="w-2.5 h-2.5 rounded-full" :class="strength === 'strong' ? 'bg-blue-500' : 'bg-gray-300'"></span>
            <span class="w-2.5 h-2.5 rounded-full" :class="strength === 'heavy' ? 'bg-green-500' : 'bg-gray-300'"></span>
          </div>

          <div v-if="password" class="mt-2 text-sm text-gray-500">
            <span v-if="validationError === 2" class="text-red-500">😠 Weak. Must contain at least 8 characters</span>
            <span v-else-if="validationError === 3" class="text-orange-500">😲 Average. Must contain at least 1 letter or number</span>
            <span v-else-if="validationError === 4" class="text-blue-500">🙂 Almost. Must contain a special symbol</span>
            <span v-else-if="validationError === 5" class="text-green-500">😊 Awesome! You have a secure password.</span>
          </div>
        </div>

        <!-- Terms and Conditions -->
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="agree" class="h-4 w-4 text-blue-500" />
          <label for="agree" class="text-sm text-gray-700">
            I agree to the
            <router-link to="/pages/term-condition" class="text-blue-500">Terms of Service</router-link> and
            <router-link to="/pages/privacy-policy" class="text-blue-500">Privacy Policy</router-link>.
          </label>
        </div>

        <!-- Submit Button -->
        <div class="mt-6">
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Create Account
          </button>
        </div>
      </form>

      <!-- Google/Facebook Sign-In -->
      <div class="mt-6 text-center">
        <span class="text-sm text-gray-600">Or sign in with</span>
        <div class="mt-4">
          <ul class="space-y-2">
            <li>
              <a href="javascript:void(0);" class="flex items-center justify-center space-x-2">
                <img src="@/assets/img/net-icon-01.png" class="w-6 h-6" alt="Google Logo" />
                <span>Sign in with Google</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" class="flex items-center justify-center space-x-2">
                <img src="@/assets/img/net-icon-02.png" class="w-6 h-6" alt="Facebook Logo" />
                <span>Sign in with Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sign-In Link -->
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account? <router-link to="/" class="text-blue-500">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
//import * as Yup from 'yup';
import { Field } from 'vee-validate';

import LoginBanner from '@/components/login-banner.vue'

const router = useRouter();
const password = ref('');
const showPassword = ref(false);
const validationError = ref(0);
const strength = ref('');
const errors = ref({
  password: '',
});

const handlePasswordChange = () => {
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;
  const poorPassword = /[a-z]/.test(passwordValue);
  const weakPassword = /(?=.*?[0-9])/.test(passwordValue);
  const strongPassword = /(?=.*?[#?!@$%^&*-])/.test(passwordValue);
  const whitespace = /^\s*$/.test(passwordValue);

  if (passwordValue !== '') {
    if (whitespace) {
      errors.value.password = 'Whitespaces are not allowed';
    } else {
      errors.value.password = '';
      checkPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
    }
  } else {
    errors.value.password = '';
    validationError.value = 0;
    strength.value = '';
  }
};

const checkPasswordStrength = (passwordLength, poorPassword, weakPassword, strongPassword) => {
  if (passwordLength < 8) {
    validationError.value = 2;
    strength.value = 'poor';
  } else if (passwordLength >= 8 && (poorPassword || weakPassword || strongPassword)) {
    validationError.value = 3;
    strength.value = 'weak';
  } else if (passwordLength >= 8 && poorPassword && (weakPassword || strongPassword)) {
    validationError.value = 4;
    strength.value = 'strong';
  } else if (passwordLength >= 8 && poorPassword && weakPassword && strongPassword) {
    validationError.value = 5;
    strength.value = 'heavy';
  }
};

const toggleShow = () => {
  showPassword.value = !showPassword.value;
};

// const schema = Yup.object().shape({
//   email: Yup.string().required('Email is required').email('Email is invalid'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

const onSubmit = async (values) => {
  let Rawdata = localStorage.getItem('storedData');
  let Pdata = JSON.parse(Rawdata) || [];
  const Eresult = Pdata.find(({ email }) => email === values.email);

  if (Eresult) {
    document.getElementById('email').innerHTML = 'This email already exists';
  } else {
    Pdata.push(values);
    const jsonData = JSON.stringify(Pdata);
    localStorage.setItem('storedData', jsonData);
    router.push('/');
  }
};

</script>

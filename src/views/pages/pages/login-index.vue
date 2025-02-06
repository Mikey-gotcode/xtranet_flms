<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <login-banner></login-banner>

    <div class="w-full md:w-1/2 bg-white shadow-lg p-8 rounded-lg">
      <!-- Login -->
      <div class="login-wrapper">
        <div class="loginbox">
          <div class="w-full">
            <div class="img-logo text-center">
              <img src="@/assets/img/logo.svg" class="max-w-xs mx-auto" alt="Logo" />
              <div class="text-right mt-4">
                <router-link to="/home/" class="text-blue-500">Back to Home</router-link>
              </div>
            </div>
            <h1 class="text-2xl font-semibold text-center my-4">Sign into Your Account</h1>
            <LoginForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-2">
                  <Field
                    name="email"
                    type="text"
                    value="example@dreamstechnologies.com"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <div class="text-red-500 text-sm mt-1">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
              </div>
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <div class="relative mt-2">
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    value="123456"
                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    :class="{ 'border-red-500': errors.password }"
                  />
                  <span
                    @click="toggleShow"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    :class="{
                      'feather-eye': showPassword,
                      'feather-eye-off': !showPassword,
                    }"
                  ></span>
                  <div class="text-red-500 text-sm mt-1">{{ errors.password }}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
              </div>
              <div class="mb-4 text-right">
                <router-link to="forgot-password" class="text-blue-500 text-sm">Forgot Password?</router-link>
              </div>
              <div class="flex items-center mb-4">
                <input type="checkbox" name="remember" class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                <label for="remember" class="ml-2 text-sm">Remember me</label>
              </div>
              <div class="mt-6">
                <router-link to="/home/" class="w-full py-3 bg-blue-500 text-white rounded-md text-center block">Sign In</router-link>
              </div>
            </LoginForm>
          </div>
        </div>
        <div class="text-center mt-8">
          <span class="text-sm text-gray-600">Or sign in with</span>
          <div class="mt-4">
            <ul class="flex justify-center space-x-4">
              <li>
                <a href="#" class="flex items-center space-x-2 text-blue-500">
                  <img src="@/assets/img/net-icon-01.png" class="h-6 w-6" alt="Google" />
                  <span>Sign In using Google</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center space-x-2 text-blue-500">
                  <img src="@/assets/img/net-icon-02.png" class="h-6 w-6" alt="Facebook" />
                  <span>Sign In using Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          <p class="mt-4 text-sm">
            New User? <router-link to="register" class="text-blue-500">Create an Account</router-link>
          </p>
        </div>
      </div>
      <!-- /Login -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { router } from "@/router";
import { Form as LoginForm, Field } from "vee-validate";  // Renaming Form to LoginForm
import * as Yup from "yup";

export default {
  components: {
    LoginForm,  // Register LoginForm
    Field,
  },
  setup() {
    const showPassword = ref(false);
    const emailError = ref("");
    const passwordError = ref("");

    // Define the schema using Yup
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });

    // Function to toggle password visibility
    const toggleShow = () => {
      showPassword.value = !showPassword.value;
    };

    // Submit handler
    const onSubmit = (values) => {
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      
      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push("/home/");
        } else {
          document.getElementById("password").innerHTML = "Incorrect password";
        }
      } else {
        document.getElementById("email").innerHTML = "Email is not valid";
      }
    };

    // Store data in local storage if it's not already there
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@dreamstechnologies.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }

    return {
      schema,
      showPassword,
      toggleShow,
      onSubmit,
      emailError,
      passwordError,
    };
  },
};
</script>

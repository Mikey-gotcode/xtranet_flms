<template>
  <ul class="nav header-navbar-rht">
    <li class="nav-item user-nav">
      <div>
        <a
          href="#"
          id="dark-mode-toggle"
          ref="darkModeToggle"
          class="dark-mode-toggle"
          @click="enableDarkMode"
        >
          <i class="fa-solid fa-moon"></i>
        </a>
        <a
          href="#"
          id="light-mode-toggle"
          class="dark-mode-toggle"
          ref="lightModeToggle"
          @click="disableDarkMode"
        >
          <i class="fa-solid fa-sun"></i>
        </a>
      </div>
    </li>
    <li class="nav-item user-nav">
      <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
        <span class="user-img">
          <img src="@/assets/img/user/user-17.jpg" alt="Img">
          <span class="status online"></span>
        </span>
      </a>
      <div class="users dropdown-menu dropdown-menu-right" data-popper-placement="bottom-end">
        <div class="user-header">
          <div class="avatar avatar-sm">
            <img src="@/assets/img/user/user-17.jpg" alt="User Image" class="avatar-img rounded-circle">
          </div>
          <div class="user-text">
            <h6>Eugene Andre</h6>
            <p class="text-muted mb-0">Instructor</p>
          </div>
        </div>
        <router-link class="dropdown-item" to="/instructor/instructor-dashboard"><i class="feather-home me-1"></i> Dashboard</router-link>
        <router-link class="dropdown-item" to="/instructor/instructor-settings"><i class="feather-star me-1"></i> Edit Profile</router-link>
        <div class="dropdown-item night-mode">
          <span><i class="feather-moon me-1"></i> Night Mode </span>
          <div class="form-check form-switch check-on m-0">
            <input class="form-check-input" type="checkbox" id="night-mode">
          </div>
        </div>
        <router-link class="dropdown-item" to="/"><i class="feather-log-out me-1"></i> Logout</router-link>
      </div>
    </li>
  </ul>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const darkModeToggle = ref(null);
    const lightModeToggle = ref(null);

    // Function to enable dark mode
    function enableDarkMode() {
      document.documentElement.setAttribute("class", "light dark");
      darkModeToggle.value.classList.remove("activate");
      lightModeToggle.value.classList.add("activate");
      localStorage.setItem("darkMode", "enabled");
    }

    // Function to disable dark mode
    function disableDarkMode() {
      document.documentElement.setAttribute("class", "light");
      lightModeToggle.value.classList.remove("activate");
      darkModeToggle.value.classList.add("activate");
      localStorage.removeItem("darkMode");
    }

    // Check the current mode on page load
    onMounted(() => {
      const darkMode = localStorage.getItem("darkMode");
      if (darkMode === "enabled") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });

    return {
      darkModeToggle,
      lightModeToggle,
      enableDarkMode,
      disableDarkMode,
    };
  },
};
</script>
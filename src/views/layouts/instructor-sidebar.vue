<template>
  <div class="col-xl-3 col-lg-3 theiaStickySidebar">
    <div class="stickysidebar">
      <div class="settings-widget dash-profile">
        <div class="settings-menu">
          <div class="profile-bg">
            <div class="profile-img">
              <router-link to="/instructor/instructor-profile"
                ><img src="@/assets/img/user/user-17.jpg" alt="Img"
              /></router-link>
            </div>
          </div>
          <div class="profile-group">
            <div class="profile-name text-center">
              <h4>
                <router-link to="/instructor/instructor-profile"
                  >Eugene Andre</router-link
                >
              </h4>
              <p>Instructor</p>
              <router-link
                to="/course/add-course"
                class="add-course btn-primary"
                >Add New Course</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="settings-widget account-settings">
        <div class="settings-menu">
          <h3>Dashboard</h3>
          <ul>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-dashboard') }"
            >
              <router-link
                to="/instructor/instructor-dashboard"
                class="nav-link"
              >
                <i class="bx bxs-tachometer"></i>Dashboard
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-profile') }"
            >
              <router-link to="/instructor/instructor-profile" class="nav-link">
                <i class="bx bxs-user"></i>My Profile
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{
                active: isActive('/instructor/instructor-enrolled-course'),
              }"
            >
              <router-link
                to="/instructor/instructor-enrolled-course"
                class="nav-link"
              >
                <i class="bx bxs-graduation"></i>Enrolled Courses
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-wishlist') }"
            >
              <router-link
                to="/instructor/instructor-wishlist"
                class="nav-link"
              >
                <i class="bx bxs-heart"></i>Wishlist
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-reviews') }"
            >
              <router-link to="/instructor/instructor-reviews" class="nav-link">
                <i class="bx bxs-star"></i>Reviews
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-quiz') }"
            >
              <router-link to="/instructor/instructor-quiz" class="nav-link">
                <i class="bx bxs-shapes"></i>My Quiz Attempts
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-orders') }"
            >
              <router-link to="/instructor/instructor-orders" class="nav-link">
                <i class="bx bxs-cart"></i>Order History
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-qa') }"
            >
              <router-link to="/instructor/instructor-qa" class="nav-link">
                <i class="bx bxs-bookmark-alt"></i>Question & Answer
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-referral') }"
            >
              <router-link
                to="/instructor/instructor-referral"
                class="nav-link"
              >
                <i class="bx bxs-user-plus"></i>Referrals
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-chat') }"
            >
              <router-link to="/instructor/instructor-chat" class="nav-link">
                <i class="bx bxs-chat"></i>Messages
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{
                active: isActive('/instructor/instructor-notifications'),
              }"
            >
              <router-link
                to="/instructor/instructor-notifications"
                class="nav-link"
              >
                <i class="bx bxs-bell"></i>Notifications
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-tickets') }"
            >
              <router-link to="/instructor/instructor-tickets" class="nav-link">
                <i class="bx bxs-coupon"></i>Support Tickets
              </router-link>
            </li>
          </ul>
          <h3>Instructor</h3>
          <ul>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-course') }"
            >
              <router-link to="/instructor/instructor-course" class="nav-link">
                <i class="bx bxs-rocket"></i>My Courses
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{
                active: isActive('/instructor/instructor-announcements'),
              }"
            >
              <router-link
                to="/instructor/instructor-announcements"
                class="nav-link"
              >
                <i class="bx bxs-volume-full"></i>Announcements
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-withdraw') }"
            >
              <router-link
                to="/instructor/instructor-withdraw"
                class="nav-link"
              >
                <i class="bx bxs-wallet"></i>Withdrawls
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{
                active: isActive('/instructor/instructor-quiz-attempts'),
              }"
            >
              <router-link
                to="/instructor/instructor-quiz-attempts"
                class="nav-link"
              >
                <i class="bx bxs-shapes"></i>Quiz Attempts
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-assignment') }"
            >
              <router-link
                to="/instructor/instructor-assignment"
                class="nav-link"
              >
                <i class="bx bxs-file"></i>Assignments
              </router-link>
            </li>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-earnings') }"
            >
              <router-link
                to="/instructor/instructor-earnings"
                class="nav-link"
              >
                <i class="bx bxs-badge-dollar"></i>Earnings
              </router-link>
            </li>
          </ul>
          <h3>Account Settings</h3>
          <ul>
            <li
              class="nav-item"
              :class="{ active: isActive('/instructor/instructor-settings') }"
            >
              <router-link
                to="/instructor/instructor-settings"
                class="nav-link"
              >
                <i class="bx bxs-cog"></i>Settings
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="bx bxs-log-out"></i>Logout
              </router-link>
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
      activeClass: "active",
      Available: ["I am Available Now", "Not Available"],
    };
  },
  methods: {
    isActive(paths) {
      return paths.includes(this.$route.path);
    },
  },
};
</script>

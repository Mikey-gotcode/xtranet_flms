<template>
  <div class="error-page">
      <div class="error-box">
        <div class="error-logo">
          <router-link to="/home/">
            <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
          </router-link>
        </div>
        <div class="error-box-img">
          <img src="@/assets/img/error-01.png" alt="" class="img-fluid" />
        </div>
        <h3 class="h2 mb-3">Oh No! Error 404</h3>
        <p class="h4 font-weight-normal">
          This page you requested counld not found. May the force be with you!
        </p>
        <router-link to="/home/" class="btn btn-primary">Back to Home</router-link>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

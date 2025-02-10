<template>
  <div class="bg-blue-100 py-4">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
        <nav aria-label="breadcrumb">
          <ol class="flex space-x-2 text-gray-600">
            <li>
              <router-link to="/home/" class="hover:text-blue-600">{{ text }}</router-link>
            </li>
            <li>/</li>
            <li class="text-blue-600 font-medium" aria-current="page">{{ text1 }}</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    text1: { type: String, default: "" },
  },
};
</script>

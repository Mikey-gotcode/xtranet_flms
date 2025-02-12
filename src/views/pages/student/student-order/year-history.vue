<template>
  <div class="overflow-x-auto bg-white shadow-md rounded-lg p-4">
    <table class="w-full border-collapse border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border p-3 text-left">Order ID</th>
          <th class="border p-3 text-left">Course Name</th>
          <th class="border p-3 text-left">Date</th>
          <th class="border p-3 text-left">Price</th>
          <th class="border p-3 text-left">Status</th>
          <th class="border p-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
          <td class="border p-3">#{{ order.id }}</td>
          <td class="border p-3">
            <span class="font-medium">{{ order.course }}</span>
          </td>
          <td class="border p-3">{{ order.date }}</td>
          <td class="border p-3">${{ order.price }}</td>
          <td class="border p-3">
            <span
              :class="{
                'text-yellow-500': order.status === 'On Hold',
                'text-green-500': order.status === 'Completed',
                'text-red-500': order.status === 'Cancelled'
              }"
            >
              {{ order.status }}
            </span>
          </td>
          <td class="border p-3 text-center">
            <a href="javascript:void(0);" class="text-blue-500 hover:text-blue-700">
              <i class="bx bxs-download text-xl"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'



  const ordersArray = [
    {
      id: 2643,
      course: "Build Responsive Real World Websites with HTML5 and CSS3",
      date: "March 24, 2024",
      price: 34,
      status: "On Hold"
    },
    {
      id: 2644,
      course: "Sketch from A to Z (2024): Become an app designer",
      date: "March 26, 2024",
      price: 40,
      status: "On Hold"
    },
    {
      id: 2645,
      course: "Learn Angular Fundamentals Beginners Guide",
      date: "April 12, 2024",
      price: 25,
      status: "Completed"
    },
    {
      id: 2646,
      course: "Build Responsive Real World Websites with HTML5 and CSS3",
      date: "April 16, 2024",
      price: 35,
      status: "On Hold"
    }
  ]
 const orders= ref(ordersArray)

</script>

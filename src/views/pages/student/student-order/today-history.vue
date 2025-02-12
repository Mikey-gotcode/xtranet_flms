<template>
  <div>
    <table class="w-full border-collapse border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border p-2">Order ID</th>
          <th class="border p-2">Date</th>
          <th class="border p-2">Amount</th>
          <th class="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.orderId">
          <td class="border p-2">{{ order.orderId }}</td>
          <td class="border p-2">{{ order.date }}</td>
          <td class="border p-2">{{ order.amount }}</td>
          <td class="border p-2">
            <span
              :class="{
                'text-green-500': order.status === 'Completed',
                'text-yellow-500': order.status === 'Pending',
                'text-red-500': order.status === 'Failed'
              }"
            >
              {{ order.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// const orders = ref(ordersArray)

const ordersArray=[
  {
    orderId: 2643,
    course: "Build Responsive Real World Websites with HTML5 and CSS3",
    date: "March 24, 2024",
    amount: 34,
    status: "On Hold"
  },
  {
    orderId: 2644,
    course: "Sketch from A to Z (2024): Become an app designer",
    date: "March 26, 2024",
    amount: 40,
    status: "On Hold"
  },
  {
    orderId: 2645,
    course: "The Complete JavaScript Course 2024: From Zero to Expert",
    date: "April 02, 2024",
    amount: 50,
    status: "Completed"
  },
  {
    orderId: 2646,
    course : "Python for Data Science and Machine Learning Bootcamp",
    date: "April 10, 2024",
    amount: 45,
    status: "Cancelled"
  }
]


const orders = ref(ordersArray)

</script>

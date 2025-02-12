<template>
 <div class="bg-white shadow-lg rounded-lg p-6">
  <div class="flex justify-between items-center mb-4">
    <h3 class="text-xl font-semibold">Referred Users</h3>
    <div class="relative">
      <input
        type="text"
        class="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Select Date Range"
        ref="dateRangeInput"
      />
      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <i class="bx bx-calendar-edit"></i>
      </span>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-200 px-4 py-2">Referred ID</th>
          <th class="border border-gray-200 px-4 py-2">Referrals</th>
          <th class="border border-gray-200 px-4 py-2">URL</th>
          <th class="border border-gray-200 px-4 py-2"></th>
          <th class="border border-gray-200 px-4 py-2">Visits</th>
          <th class="border border-gray-200 px-4 py-2">Total Earned</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in referredUsers" :key="user.id" class="hover:bg-gray-50">
          <td class="border border-gray-200 px-4 py-2 text-center">{{ user.id }}</td>
          <td class="border border-gray-200 px-4 py-2 flex items-center space-x-3">
            <router-link :to="'/student/student-profile'" class="flex items-center space-x-2">
              <img :src="user.avatar" class="w-8 h-8 rounded-full" alt="User Image"/>
              <span>{{ user.name }}</span>
            </router-link>
          </td>
          <td class="border border-gray-200 px-4 py-2 text-blue-500 truncate max-w-xs">
            {{ user.url }}
          </td>
          <td class="border border-gray-200 px-4 py-2 text-center">
            <a href="javascript:void(0);" class="text-gray-500 hover:text-gray-700">
              <i class="bx bx-paste"></i>
            </a>
          </td>
          <td class="border border-gray-200 px-4 py-2 text-center">{{ user.visits }}</td>
          <td class="border border-gray-200 px-4 py-2 text-center font-semibold">${{ user.earned }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>
<script setup>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

    const dateRangeInput = ref(null);

    const referredUsers = ref(
      [
  {
    "id": "09341",
    "name": "Thompson Hicks",
    "avatar": "@/assets/img/user/user2.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 10,
    "earned": 45.00
  },
  {
    "id": "09342",
    "name": "Jennifer Tovar",
    "avatar": "@/assets/img/user/user4.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 15,
    "earned": 75.00
  },
  {
    "id": "09343",
    "name": "James Schulte",
    "avatar": "@/assets/img/user/user3.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 20,
    "earned": 100.00
  },
  {
    "id": "09344",
    "name": "Kristy Cardona",
    "avatar": "@/assets/img/user/user1.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 1,
    "earned": 44.00
  },
  {
    "id": "09345",
    "name": "William Aragon",
    "avatar": "@/assets/img/user/user14.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 5,
    "earned": 25.00
  },
  {
    "id": "09346",
    "name": "Shirley Lis",
    "avatar": "@/assets/img/user/user8.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 500,
    "earned": 160.00
  },
  {
    "id": "09347",
    "name": "John Brewer",
    "avatar": "@/assets/img/user/user2.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 187,
    "earned": 150.00
  },
  {
    "id": "09348",
    "name": "Doris Hughes",
    "avatar": "@/assets/img/user/user5.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 10,
    "earned": 45.00
  },
  {
    "id": "09349",
    "name": "Arthur Nalley",
    "avatar": "@/assets/img/user/user13.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 15,
    "earned": 10.00
  },
  {
    "id": "09350",
    "name": "Sarah Martinez",
    "avatar": "@/assets/img/user/user6.jpg",
    "url": "https://dreamslmscourse.com/reffer/?refid=345re667877k9",
    "visits": 98,
    "earned": 10.00
  }
]

    )

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [
                moment().subtract(1, "days"),
                moment().subtract(1, "days"),
              ],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
              ],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    


</script>

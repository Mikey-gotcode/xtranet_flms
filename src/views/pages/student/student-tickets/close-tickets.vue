<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-200 bg-white text-left text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-4 py-2">Ticket ID</th>
          <th class="border border-gray-300 px-4 py-2">Date</th>
          <th class="border border-gray-300 px-4 py-2">Subject</th>
          <th class="border border-gray-300 px-4 py-2">Priority</th>
          <th class="border border-gray-300 px-4 py-2">Category</th>
          <th class="border border-gray-300 px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id" class="border-b hover:bg-gray-50">
          <td class="border border-gray-300 px-4 py-2">{{ ticket.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ ticket.date }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ ticket.subject }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <span :class="priorityClass(ticket.priority)" class="px-2 py-1 rounded text-white text-sm">
              {{ ticket.priority }}
            </span>
          </td>
          <td class="border border-gray-300 px-4 py-2">{{ ticket.category }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <span :class="statusClass(ticket.status)" class="px-2 py-1 rounded text-white text-sm">
              {{ ticket.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tickets = ref([
  { id: "Ticket#003", date: "March 27, 2024", subject: "Account Activation mail not received", priority: "High", category: "Mailing Issues", status: "Closed" },
  { id: "Ticket#005", date: "April 24, 2024", subject: "Payment Processed but not showed", priority: "Low", category: "Payment Issues", status: "Closed" },
]);

const priorityClass = (priority) => {
  return {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  }[priority] || "bg-gray-500";
};

const statusClass = (status) => {
  return {
    Opened: "bg-green-500",
    Inprogress: "bg-yellow-500",
    Closed: "bg-red-500",
  }[status] || "bg-gray-500";
};
</script>

<template>
  <div class="tab-pane show active" id="all">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-300">
            <th class="px-4 py-2 text-left">Ticket ID</th>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left">Subject</th>
            <th class="px-4 py-2 text-left">Priority</th>
            <th class="px-4 py-2 text-left">Category</th>
            <th class="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id" class="border-b hover:bg-gray-50">
            <td class="px-4 py-2">{{ ticket.id }}</td>
            <td class="px-4 py-2">{{ ticket.date }}</td>
            <td class="px-4 py-2">{{ ticket.subject }}</td>
            <td class="px-4 py-2">
              <span :class="priorityClass(ticket.priority)" class="px-2 py-1 rounded text-white text-sm">
                {{ ticket.priority }}
              </span>
            </td>
            <td class="px-4 py-2">{{ ticket.category }}</td>
            <td class="px-4 py-2">
              <span :class="statusClass(ticket.status)" class="px-2 py-1 rounded text-white text-sm">
                {{ ticket.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tickets = ref([
  { id: "Ticket#001", date: "March 12, 2024", subject: "Need a freelancer software", priority: "Low", category: "Mailing Issues", status: "Opened" },
  { id: "Ticket#002", date: "March 18, 2024", subject: "I have a problem", priority: "High", category: "Language Issues", status: "Inprogress" },
  { id: "Ticket#003", date: "March 27, 2024", subject: "Account Activation mail not received", priority: "High", category: "Mailing Issues", status: "Closed" },
  { id: "Ticket#004", date: "April 04, 2024", subject: "Enabling SSH service", priority: "Medium", category: "Installation Error", status: "Opened" },
  { id: "Ticket#005", date: "April 24, 2024", subject: "Payment Processed but not showed", priority: "Low", category: "Payment Issues", status: "Closed" },
  { id: "Ticket#006", date: "April 28, 2024", subject: "When will start the order", priority: "High", category: "Demo Problem", status: "Inprogress" },
  { id: "Ticket#007", date: "June 03, 2024", subject: "Slow speed while Course Download", priority: "High", category: "Server Issues", status: "Opened" },
  { id: "Ticket#008", date: "June 13, 2024", subject: "Unable to access the course", priority: "Medium", category: "Demo Problem", status: "Opened" },
  { id: "Ticket#009", date: "July 15, 2024", subject: "Assignment Upload Error files", priority: "Low", category: "File Error", status: "Opened" },
  { id: "Ticket#010", date: "July 23, 2024", subject: "Account Recovery Assistance Need", priority: "High", category: "Recovery Issues", status: "Opened" },
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

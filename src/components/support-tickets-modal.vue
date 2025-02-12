<template>
  <div class="flex flex-row justify-center gap-16 mt-10">
    <!-- Add Payment Method Modal -->
    <div id="addpaymentMethod" tabindex="-1" aria-labelledby="addpaymentMethod" aria-hidden="true"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-6">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
        <div class="flex justify-between items-center">
          <h5 class="text-lg font-semibold">Add New Payment Method</h5>
          <button type="button" class="text-gray-500 hover:text-gray-700" @click="$emit('close')">
            <i class="fa-regular fa-circle-xmark text-xl"></i>
          </button>
        </div>
        <div class="mt-4">
          <form @submit.prevent="savePaymentMethod">
            <div>
              <label class="flex items-center space-x-2">
                <input type="radio" name="paymentMethod" checked class="form-radio text-blue-500" />
                <span>Credit or Debit card</span>
              </label>
              <label class="flex items-center space-x-2 mt-2">
                <input type="radio" name="paymentMethod" class="form-radio text-blue-500" />
                <span>PayPal</span>
              </label>
            </div>

            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="XXXX XXXX XXXX XXXX" />
            </div>

            <div class="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Month</label>
                <p-select v-model="selectedMonth" :options="TicketSel" placeholder="Select Month"
                  class="w-full custom-select" @update:modelValue="handleSelectMonth" />

              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Year</label>
                <p-select v-model="selectedYear" :options="YearTick" placeholder="Select Year"
                  class="w-full custom-select" @update:modelValue="handleSelectYear" />

              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">CVV Code</label>
                <input type="text"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="XXXX" />
              </div>
            </div>

            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Name on Card</label>
              <input type="text"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Cardholder Name" />
            </div>

            <div class="flex justify-end space-x-2 mt-6">
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Save changes
              </button>
              <button type="button" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                @click="$emit('close')">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Add Ticket Modal -->
    <div id="add-tickets" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-5">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
        <div class="flex justify-between items-center">
          <h4 class="text-lg font-semibold">Add New Ticket</h4>
          <button type="button" class="text-gray-500 hover:text-gray-700" @click="$emit('close')">
            <i class="feather-x text-xl"></i>
          </button>
        </div>
        <div class="mt-4">
          <form @submit.prevent="submitTicket">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Ticket Title</label>
                <input type="text"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Category</label>
                  <p-select v-model="selectedCategory" :options="CateTickets" placeholder="Choose Category"
                    class="w-full custom-select" @update:modelValue="handleSelectCategory" />

                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Priority</label>
                  <p-select v-model="selectedPriority" :options="PriorityTickets" placeholder="Choose Priority"
                    class="w-full custom-select" @update:modelValue="handleSelectPriority" />


                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Description</label>
                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Attachment</label>
                <div class="p-6 text-center shadow-md rounded-md bg-gray-50">
                  <p>Drag & Drop files</p>
                </div>
                <p class="text-sm text-gray-500 mt-2">Accept File Type: doc, docx, jpg, jpeg, png, txt, pdf</p>
              </div>
            </div>

            <div class="flex justify-end space-x-2 mt-6">
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Submit
              </button>
              <button type="button" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                @click="$emit('close')">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  //import VueSelect from "vue3-select2-component";
  import {
    ref,
    defineEmits
  } from "vue";

  // Declare emitted events
  const emit = defineEmits(["close", "select"]);

  const editor = ClassicEditor;
  const editorData = ref("Description");
  const editorConfig = ref({});

  const YearTick = ref(["2024", "2025", "2026", "2027"]);
  const TicketSel = ref(["January", "February", "March", "April"]);
  const CateTickets = ref(["Mailing Issue", "Language Issue", "Installation Error"]);
  const PriorityTickets = ref(["High", "Medium", "Low"]);

  const selectedMonth = ref(null);
  const selectedYear = ref(null);
  const selectedCategory = ref(null);
  const selectedPriority = ref(null);

  const savePaymentMethod = () => {
    console.log("Payment method saved");
  };

  const submitTicket = () => {
    console.log("Ticket submitted");
  };

  // Emit select event when a value is chosen
  const handleSelectMonth = (value) => {
    emit("select", value);
    selectedMonth.value = value;
  };

  const handleSelectYear = (value) => {
    emit("select", value);
    selectedYear.value = value;
  };

  const handleSelectCategory = (value) => {
    emit("select", value);
    selectedCategory.value = value;
  };

  const handleSelectPriority = (value) => {
    emit("select", value);
    selectedPriority.value = value;
  };
</script>

<style scoped>
 .custom-select {
  width: 100% !important;
  display: block !important;
}

.p-dropdown {
  width: 100% !important;
}

.p-dropdown-panel {
  min-width: 100% !important;
}

</style>
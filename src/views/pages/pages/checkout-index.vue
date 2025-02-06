<script setup>
import { ref } from 'vue';
import Page_Header from '@/views/layouts/page-header.vue'
import CheckoutBreadcrumb from '@/components/breadcrumb/checkout-breadcrumb.vue'
import FooterOne from '@/views/layouts/layouts-footer.vue'

const State = ref(["Select State", "Brazil", "French"]);
const country = ref(["Select country", "India", "America", "London"]);
const Month = ref(["Month", "Jun", "Feb", "March"]);
const Year = ref(["Year", "2023", "2023", "2023"]);
</script>

<template>
  <Page_Header/>
  <CheckoutBreadcrumb/>

  <!-- Cart -->
  <section class="py-12 bg-gray-900 text-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column (Billing Address & Payment Method) -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Billing Address -->
          <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-semibold text-white mb-4">Billing Address</h4>
            <form>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div class="sm:col-span-1">
                  <label class="block text-gray-300">First Name</label>
                  <input type="text" placeholder="Enter your first name" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="sm:col-span-1">
                  <label class="block text-gray-300">Last Name</label>
                  <input type="text" placeholder="Enter your last name" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-gray-300">Phone Number (Optional)</label>
                  <input type="text" placeholder="Phone Number" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-gray-300">Address Line 1</label>
                  <input type="text" placeholder="Address" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-gray-300">Address Line 2 (Optional)</label>
                  <input type="text" placeholder="Address" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="sm:col-span-2 md:col-span-1">
                  <label class="block text-gray-300">State</label>
                  <vue-select :options="State" placeholder="Select State" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg custom-select" />
                </div>
                <div class="sm:col-span-2 md:col-span-1">
                  <label class="block text-gray-300">Country</label>
                  <vue-select :options="country" placeholder="Select country" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg custom-select" />
                </div>
                <div class="md:col-span-2">
                  <label class="block text-gray-300">Zip/Postal Code</label>
                  <input type="text" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
              </div>

              <!-- Checkboxes -->
              <div class="space-y-2 mt-4">
                <label class="flex items-center text-gray-300">
                  <input type="checkbox" class="mr-2" />
                  Shipping address is the same as my billing address
                </label>
                <label class="flex items-center text-gray-300">
                  <input type="checkbox" class="mr-2" />
                  Save this information for next time
                </label>
              </div>
            </form>
          </div>

          <!-- Payment Method -->
          <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-semibold text-white mb-4">Payment Method</h4>
            <form>
              <div class="space-y-4">
                <div class="flex space-x-4">
                  <label class="flex items-center text-gray-300">
                    <input type="radio" name="payment" class="mr-2" checked />
                    Credit or Debit card
                  </label>
                  <label class="flex items-center text-gray-300">
                    <input type="radio" name="payment" class="mr-2" />
                    PayPal
                  </label>
                </div>
                <div>
                  <label class="block text-gray-300">Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-gray-300">Month</label>
                    <vue-select :options="Month" placeholder="Month" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg custom-select" />
                  </div>
                  <div>
                    <label class="block text-gray-300">Year</label>
                    <vue-select :options="Year" placeholder="Year" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg custom-select" />
                  </div>
                  <div>
                    <label class="block text-gray-300">CVV Code</label>
                    <input type="text" placeholder="XXXX" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                  </div>
                </div>
                <div>
                  <label class="block text-gray-300">Name on Card</label>
                  <input type="text" placeholder="Cardholder Name" class="w-full bg-gray-700 text-white border border-solid border-gray-600 rounded-lg px-3 py-2 mt-1" />
                </div>

                <!-- Remember this card Checkbox -->
                <div class="space-y-2">
                  <label class="flex items-center text-gray-300">
                    <input type="checkbox" class="mr-2" />
                    Remember this card
                  </label>
                </div>

                <!-- Div for Make Payment -->
                <div class="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg text-center hover:bg-pink-700 cursor-pointer">
                  <router-link to="/payment" class="block">Make a Payment</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Right Column (Selected Plan) -->
        <div class="sticky top-12 lg:col-span-1">
          <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <h4 class="text-xl font-semibold text-white mb-4">Selected Plan</h4>
            <div class="bg-gray-700 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-white">Basic</h3>
              <p class="text-gray-400">For individuals who just need to start with the basic features</p>
              <p class="text-sm text-gray-500">Per user, per month when billed monthly</p>
              <h2 class="text-2xl font-bold text-red-500">$10</h2>
            </div>
            <router-link to="pricing-plan" class="block mt-4 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
              Change the Plan
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Cart -->

  <FooterOne/>
</template>

<style scoped>
.custom-select .vs__open-indicator {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.custom-select .vs__dropdown-toggle {
  border-color: transparent;
  background-color: transparent;
}

.custom-select .vs__dropdown-toggle:focus {
  outline: none;
}

.custom-select .vs__dropdown {
  border: none;
  box-shadow: none;
}

.router-link-active {
  color: #f87171;
}

@media (max-width: 768px) {
  .sticky {
    position: static;
    margin-top: 1rem;
  }
}
</style>

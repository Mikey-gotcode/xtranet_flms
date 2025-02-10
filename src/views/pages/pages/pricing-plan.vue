<script setup>
import LoginHeaderBorder from '@/views/layouts/login-headerborder.vue'
import Pricingplan from '@/components/breadcrumb/pricing-plan.vue'
import FooterOne from '@/views/layouts/layouts-footer.vue'
</script>

<template>
  <LoginHeaderBorder/>
  <Pricingplan/>

  <!-- Pricing Plan -->
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Title Section -->
      <div class="text-center mb-12">
        <div class="mb-6">
          <h5 class="text-lg text-gray-600">We keep it simple</h5>
          <h2 class="text-3xl font-semibold text-gray-800">Choose The Right Plan</h2>
          <p class="text-gray-500">Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
        </div>
        <div class="text-end">
          <img src="@/assets/img/plan.png" alt="icon" class="mx-auto"/>
        </div>
        <!-- Switch -->
        <div class="flex justify-center items-center space-x-4 mt-6">
          <label class="text-gray-700">Monthly</label>
          <div class="relative">
            <input type="checkbox" id="flexSwitchCheckChecked" class="appearance-none peer absolute inset-0 opacity-0 w-full h-full" checked />
            <div class="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500"></div>
            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:left-7 transition-all"></div>
          </div>
          <label class="text-gray-700">Annually</label>
        </div>
      </div>

     <div class="grid grid-cols-2 justify-between gap-4">
       <!-- Plan Types -->
       <div class="grid grid-flow-col grid-rows-3 gap-4">
        <div class="plan-box bg-white p-6 rounded-lg shadow-lg text-center">
          <h4 class="text-lg font-semibold text-gray-700">Basic</h4>
          <p class="text-gray-500">For individuals who just need to start with the basic features</p>
          <p class="text-gray-500">per user, per month when billed monthly</p>
          <h3 class="text-2xl font-bold text-blue-600"><span class="text-gray-400">$</span>10</h3>
        </div>
        <div class="plan-box bg-white p-6 rounded-lg shadow-lg text-center">
          <h4 class="text-lg font-semibold text-gray-700">Team</h4>
          <p class="text-gray-500">For individuals who just need to start with the basic features</p>
          <p class="text-gray-500">per user, per month when billed monthly</p>
          <h3 class="text-2xl font-bold text-blue-600"><span class="text-gray-400">$</span>10</h3>
        </div>
        <div class="plan-box bg-white p-6 rounded-lg shadow-lg text-center">
          <h4 class="text-lg font-semibold text-gray-700">Pro</h4>
          <p class="text-gray-500">For individuals who just need to start with the basic features</p>
          <p class="text-gray-500">per user, per month when billed monthly</p>
          <h3 class="text-2xl font-bold text-blue-600"><span class="text-gray-400">$</span>10</h3>
        </div>
      </div>

      <!-- Benefits & Features -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div class="benefit-box bg-white p-6 rounded-lg shadow-lg">
          <h5 class="text-xl font-semibold text-gray-700 mb-4">Benefits</h5>
          <ul class="list-disc pl-6 space-y-2 text-gray-500">
            <li>Access to slack community</li>
            <li>Access to support team</li>
            <li>Algorithmic bidding</li>
            <li>Keyword and ASIN harvesting</li>
          </ul>
          <h5 class="text-xl font-semibold text-gray-700 mt-8 mb-4">Features</h5>
          <ul class="list-disc pl-6 space-y-2 text-gray-500">
            <li>Search term isolation</li>
            <li>Total sales analytics</li>
            <li>Best seller rank</li>
            <li>Placement optimization</li>
          </ul>
          <a href="javascript:;" class="block mt-6 text-center py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start For Free</a>
        </div>
      </div>
     </div>

      <!-- Compare our plans -->
      <div class="mt-16">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Compare our plans</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto text-center">
            <thead>
              <tr>
                <td></td>
                <td class="text-center py-4 px-6 font-semibold text-gray-700">Self-Employed & Freelance</td>
                <td colspan="2" class="text-center py-4 px-6 font-semibold text-gray-700 bg-gray-100">Small businesses that need accounting, invoicing or payroll</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left px-6 py-4">Separate business/personal</td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
              </tr>
              <tr>
                <td class="text-left px-6 py-4">Estimate tax payments</td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
                <td class="text-center py-4 px-6"><img src="@/assets/img/icon/check-circle.svg" alt="icon" /></td>
              </tr>
              <!-- Repeat for other rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <FooterOne/>
</template>

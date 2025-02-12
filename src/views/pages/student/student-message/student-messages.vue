<template>
  <div class="chat-page bg-gray-100 min-h-screen">
    <div class="main-wrapper chat-wrapper">
      <Student_Header />
      <Student_Breadcrumb :title="title" :text="text" :text1="text1" />

      <div class="page-content chat-page-wrapper">
        <div class="container mx-auto px-4 w-full">
          <div class="flex flex-row h-full gap-4">
            <!-- Sidebar -->
            <div class="w-auto lg:w-1/5 flex-shrink-0">
              <Studentsidebar />
            </div>
            <!-- /Sidebar -->

            <!-- Student Profile -->
            <div class="flex-grow">
              <div class="stickysidebar">
                <div class="settings-widget card-details">
                  <div class="settings-menu">
                    <div class="profile-heading pb-6">
                      <h3 class="text-xl font-semibold">Message</h3>
                    </div>
                    <div class="checkout-form">
                      <!-- Sidebar group -->
                      <div class="content">
                        <div class="flex flex-row lg:flex-row gap-4 h-full">
                          <!-- Chats sidebar -->
                          <div class="w-1/4 min-w-[250px] bg-white rounded-lg shadow p-4 flex-shrink-0">
                            <perfect-scrollbar class="scroll-area h-full" :settings="settings" @ps-scroll-y="scrollHandle">
                              <div>
                                <!-- Left Chat Title -->
                                <div class="flex justify-between items-center mb-4">
                                  <div>
                                    <a href="javascript:void(0);" class="text-gray-700 font-medium">
                                      All Chats
                                    </a>
                                  </div>
                                  <div class="flex items-center space-x-2">
                                    <button class="text-gray-600">
                                      <i class="feather-search"></i>
                                    </button>
                                  </div>
                                </div>
                                <!-- /Left Chat Title -->

                                <!-- Top Online Contacts -->
                                <Top_Online />
                                <!-- /Top Online Contacts -->

                                <div class="chat-body">
                                  <!-- Left Chat Title -->
                                  <div class="flex justify-between items-center">
                                    <h6 class="text-gray-700 font-medium">Pinned Chat</h6>
                                  </div>
                                  <Pinned_Chat />

                                  <!-- Left Chat Title -->
                                  <div class="flex justify-between items-center">
                                    <h6 class="text-gray-700 font-medium">Recent Chat</h6>
                                  </div>
                                  <Recent_Chat />
                                </div>
                              </div>
                            </perfect-scrollbar>
                          </div>
                          <!-- / Chats sidebar -->

                          <!-- Chat -->
                          <div class="flex-grow bg-white rounded-lg shadow flex flex-col">
                            <StudentChat_Header />

                            <!-- Chat Body -->
                            <div class="flex-grow h-full overflow-auto p-4">
                              <perfect-scrollbar class="scroll-area-one h-full max-w-full " :settings="settings">
                                <Chat_Message  :messages="chatMessages" />
                              </perfect-scrollbar>
                            </div>

                            <Chat_Footer class="p-4 border-t flex items-center space-x-3"/>
                          </div>
                          <!-- /Chat -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Student Profile -->
          </div>
        </div>
      </div>
      <FooterOne />
    </div>
  </div>
</template>

<script setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import { ref } from "vue";

import Student_Header from "@/views/layouts/student-header.vue";
import Student_Breadcrumb from "@/components/breadcrumb/student-breadcrumb.vue";
import Studentsidebar from "@/views/layouts/student-sidebar.vue";
import FooterOne from "@/views/layouts/layouts-footer.vue";

import Chat_Message from "@/views/pages/student/student-message/chat-message.vue";
import Pinned_Chat from "@/views/pages/student/student-message/pinned-chat.vue";
import Recent_Chat from "@/views/pages/student/student-message/recent-chat.vue";
import Top_Online from "@/views/pages/student/student-message/top-online.vue";
import Chat_Footer from "@/views/pages/student/student-message/chat-footer.vue";
import StudentChat_Header from "@/views/pages/student/student-message/chat-header.vue";

const title = ref("Messages");
const text = ref("Home");
const text1 = ref("Messages");

const settings = ref({
  suppressScrollX: true,
});

const scrollHandle = () => {};
</script>

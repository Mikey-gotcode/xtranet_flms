import { createWebHistory,createRouter } from "vue-router";
import HomeIndex from '../views/pages/home/home-three.vue'
import login from '@/views/pages/pages/login-index.vue'
import Register from '@/views/pages/pages/register-index.vue'


import Support_Index from '@/views/pages/pages/support-index.vue'
import Pages_Index from '@/views/pages/pages/pages-index.vue'
import Checkout_Index from '@/views/pages/pages/checkout-index.vue'
import Faq_Index from '@/views/pages/pages/faq-index.vue'
import Pricing_Plan from '@/views/pages/pages/pricing-plan.vue'



import Student_Index from '@/views/pages/student/student-index.vue'
import Student_Dashboard from '@/views/pages/student/student-dashboard.vue';
import Student_Profile from '@/views/pages/student/student-profile.vue'
import Student_Courses from '@/views/pages/student/student-courses/student-courses.vue'
import Student_Wishlist from '@/views/pages/student/student-wishlist/student-wishlist.vue'
import Student_Reviews from '@/views/pages/student/student-reviews.vue'
import Student_Quiz from '@/views/pages/student/student-quiz.vue'
import Student_Order_History from '@/views/pages/student/student-order/student-order-history.vue'
import Student_Qa from '@/views/pages/student/student-qa.vue'
import Student_Referral from '@/views/pages/student/student-referral/student-referral.vue'
import Student_Messages from '@/views/pages/student/student-message/student-messages.vue'
import Student_Tickets from '@/views/pages/student/student-tickets/student-tickets.vue'



import courselesson from '@/views/pages/pages/course-lesson.vue'
import Course_Index from '@/views/pages/pages/course/course-index.vue'
import Add_Course from '@/views/pages/pages/course/add-course'
import Course_Details from '@/views/pages/pages/course/course-details.vue'
import Course_Grid from '@/views/pages/pages/course/course-grid.vue'
import Course_List from '@/views/pages/pages/course/course-list.vue'
// UI routes
const routes = [
    // {
    //     path: '/home',
    //     component: Home,
    //     children: [
    //       { path: '', redirect: '/home/index' },
    //       { path: 'index', component: Home, meta: { headerClass: 'header', NavbarClass: 'header-nav' } },
    //       { path: 'index-two', component: Hometwo, meta: { headerClass: 'header header-two', NavbarClass: 'header-nav' } },
    //       { path: 'index-three', component: Homethree, meta: { headerClass: 'header-three', NavbarClass: 'header-nav-three' } },
    //       { path: 'index-four', component: Homefour, meta: { headerClass: 'header-five', NavbarClass: 'header-nav' } }
    //     ]
    //   }

    {
        path:'/',
        component:HomeIndex,
        children: [
            { 
              path: '/home', 
              component: HomeIndex, 
              meta: { headerClass: 'header', navbarClass: 'header-nav' }
            },
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: "/student",
      component: Student_Index,
      children: [
        { path: "", redirect: "/student/student-dashboard" },
        { path: "student-dashboard", component: Student_Dashboard },
        { path: "student-profile", component: Student_Profile },
        { path: "student-courses", component: Student_Courses },
        { path: "student-wishlist", component: Student_Wishlist },
        { path: "student-reviews", component: Student_Reviews },
        { path: "student-quiz", component: Student_Quiz },
        //{ path: "student-quiz-details", component: Student_Quiz_Details },
        { path: "student-order-history", component: Student_Order_History },
        { path: "student-qa", component: Student_Qa },
        { path: "student-referral", component: Student_Referral },
        { path: "student-messages", component: Student_Messages },
        { path: "student-tickets", component: Student_Tickets },
        // { path: "student-settings", component: Student_Settings },
        // { path: "student-change-password", component: Student_Change_Password },
        // { path: "student-social-profile", component: Student_Social_Profile },
        // { path: "student-linked-accounts", component: Student_Linked_Accounts },
        // { path: "student-notifications", component: Student_Notifications },
        // { path: "students-grid", component: Student_Grid },
        // { path: "students-list", component: Student_List },
        // { path: "setting-student-subscription", component: Setting_Student_Subscription },
      ],
    },
    {
      path:"/pages",
      component:Pages_Index,
      children:[
        { path: "checkout", component: Checkout_Index },
        { path: "support", component: Support_Index },
        { path: "faq-index", component: Faq_Index },
        { path: "pricing-plan", component: Pricing_Plan },
      ]
    },
    {
      path: "/course",
      component: Course_Index,
      children: [
        { path: "", redirect: "/course/add-course" },
        { path: "add-course", component: Add_Course },
        { path: "course-list", component: Course_List },
        { path: "course-grid", component: Course_Grid },
        { path: "course-details", component: Course_Details },
        { path: "course-lesson", component: courselesson },
      ]
    }
]

export const router = createRouter({
    history:createWebHistory(),
    linkActiveClass:"active",
    routes,
})

router.beforeEach((to, from, next) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    // Continue with the navigation
    next();
  });
  
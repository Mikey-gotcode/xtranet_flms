import { createWebHistory,createRouter } from "vue-router";
import HomeIndex from '../views/pages/home/home-three.vue'
import login from '@/views/pages/pages/login-index.vue'
import Register from '@/views/pages/pages/register-index.vue'


import Support_Index from '@/views/pages/pages/support-index.vue'
import Pages_Index from '@/views/pages/pages/pages-index.vue'
import Checkout_Index from '@/views/pages/pages/checkout-index.vue'
import Faq_Index from '@/views/pages/pages/faq-index.vue'
import Pricing_Plan from '@/views/pages/pages/pricing-plan.vue'

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
    },{
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
  
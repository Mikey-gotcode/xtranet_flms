import { createWebHistory,createRouter } from "vue-router";
import HomeIndex from '../views/pages/home/homethree.vue'

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
        path:'/home',
        component:HomeIndex,
        children: [
            { path: '', redirect: '/home/index' },
            { 
              path: 'index', 
              component: HomeIndex, 
              meta: { headerClass: 'header', navbarClass: 'header-nav' }
            },
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
  
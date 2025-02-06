import { createApp } from 'vue'
import { router } from '@/router/index';
import App from './App.vue'
import "@/output.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueSelect from 'vue3-select2-component'
import VueFeather from 'vue-feather';
import VueApexCharts from "vue3-apexcharts";
import DatePicker from 'vue3-datepicker'
import Vue3Autocounter from 'vue3-autocounter';
import CKEditor from '@ckeditor/ckeditor5-vue';

// /***************Header component*************** */
// import IndexHeader from '@/views/layouts/index-header.vue'
// import Mainnav from '@/components/main-nav.vue'
// import Signpages from '@/components/sign-pages.vue'
// import HeaderMenu from '@/views/layouts/header-menu.vue';
// import Page_Header from '@/views/layouts/page-header.vue'
// import Page_Content from '@/views/layouts/page-content.vue'
// import LoginHeaderBorder from '@/views/layouts/login-headerborder.vue'

// /*********Footer component**********/
// import Footer from '@/views/layouts/layouts-footer.vue'
// import FooterTop from '@/components/footer-top.vue'
// import FooterBottom from '@/components/footer-bottom.vue'

// /******************pages */
// import Coursesidebar from '@/views/pages/pages/course/course-sidebar.vue'
// import Coursegridbreadcrumb from '@/components/breadcrumb/coursegrid-breadcrumb.vue'
// import CheckoutBreadcrumb from '@/components/breadcrumb/checkout-breadcrumb.vue'
// import BlogPagination from '@/components/lms-pagination.vue'
// import CourseDetailsBreadcrumb from '@/components/breadcrumb/course-details.vue'
// import CourseInnerpage from '@/views/pages/pages/course/inner-page.vue'
// import SupportBreadcrumb from '@/components/breadcrumb/support-breadcrumb.vue'

// //home dashboard imports
// import homethreebanner from './views/pages/home/home-threebanner.vue';
// import favouritethree from './views/pages/home/favourite-three.vue';
// import coursestabcontent from './views/pages/home/courses-tabcontent.vue';
// import acheivegoals from './views/pages/home/acheive-goals.vue';
// import instructorthree from './views/pages/home/instructor-three.vue';
// import footerthree from './views/pages/home/footer-three.vue';
// import "@/assets/styles/main.css";
// // const BannerImage = require("@/assets/img/banner-img-4.png")


// // console.log("this is the import",BannerImage)


const app = createApp(App)
// /*********************Header compoment */
// app.component('layouts-index', IndexHeader);
// app.component('main-nav', Mainnav);
// app.component('sign-pages', Signpages);
// app.component('header-menu', HeaderMenu)
// app.component('page-header',Page_Header)
// app.component('page-content',Page_Content)
// app.component('layouts-loginborder', LoginHeaderBorder);




// /*********Footer component**********/
// app.component('layouts-1', Footer);
//app.component('footer-top', FooterTop);
// app.component('footer-bottom', FooterBottom);







// /*******************pages */
// app.component('course-sidebar', Coursesidebar);
// app.component('coursegrid-breadcrumb', Coursegridbreadcrumb); 
// app.component('checkout-breadcrumb', CheckoutBreadcrumb)
// app.component('course-details', CourseDetailsBreadcrumb);
// app.component('inner-page', CourseInnerpage);
// app.component('pagination-component', BlogPagination);
// app.component('support-breadcrumb', SupportBreadcrumb);

// //set in component manager for home dashboard
// app.component('home-threebanner', homethreebanner);
// app.component('favourite-three', favouritethree);
// app.component('coursestab-content', coursestabcontent);
// app.component('acheive-goals', acheivegoals);
// app.component('instructor-three', instructorthree);
// app.component('footer-three', footerthree);

app.component('date-picker', DatePicker);
app.component('vue-select', VueSelect)
app.component(VueFeather.name, VueFeather)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueApexCharts)
app.use(CKEditor)

.use(Antd)
app.use(router).mount('#app');

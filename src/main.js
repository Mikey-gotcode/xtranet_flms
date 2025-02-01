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


//home dashboard imports
import homethreebanner from './views/pages/home/home-threebanner.vue';
import favouritethree from './views/pages/home/favourite-three.vue';
import coursestabcontent from './views/pages/home/courses-tabcontent.vue';
import acheivegoals from './views/pages/home/acheive-goals.vue';
import instructorthree from './views/pages/home/instructor-three.vue';
import footerthree from './views/pages/home/footer-three.vue';

const app = createApp(App)
//set in component manager for home dashboard
app.component('home-threebanner', homethreebanner);
app.component('favourite-three', favouritethree);
app.component('coursestab-content', coursestabcontent);
app.component('acheive-goals', acheivegoals);
app.component('instructor-three', instructorthree);
app.component('footer-three', footerthree);

app.component('date-picker', DatePicker);
app.component('vue-select', VueSelect)
app.component(VueFeather.name, VueFeather)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueApexCharts)
app.use(CKEditor)

.use(Antd)
app.use(router).mount('#app');

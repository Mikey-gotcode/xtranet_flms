import { createApp } from 'vue';
import { router } from '@/router/index';
import App from './App.vue';
import "@/output.css";
import PrimeVue from 'primevue/config'; // Import PrimeVue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import PrimeSelect from 'primevue/select';
import VueFeather from 'vue-feather';
import VueApexCharts from "vue3-apexcharts";
import DatePicker from 'vue3-datepicker';
import Vue3Autocounter from 'vue3-autocounter';
import CKEditor from '@ckeditor/ckeditor5-vue';
import "@primevue/themes/lara/light-blue/theme.css"; /* Theme */
import "@primevue/resources/primevue.min.css"; /* Core CSS */
import "primeicons/primeicons.css"; /* Icons */


const app = createApp(App);

// Use PrimeVue globally
app.use(PrimeVue);

// Register global components
app.component('date-picker', DatePicker);
app.component('p-select', PrimeSelect);
app.component(VueFeather.name, VueFeather);
app.component('vue3-autocounter', Vue3Autocounter);

app.use(VueApexCharts);
app.use(CKEditor);
app.use(Antd);
app.use(router).mount('#app');

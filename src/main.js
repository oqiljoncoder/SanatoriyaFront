
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {createPinia} from "pinia";
import router from "@/plugins/router.js";
import  VueAwesomePaginate  from 'vue-awesome-paginate';


createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueAwesomePaginate)
    .mount('#app')

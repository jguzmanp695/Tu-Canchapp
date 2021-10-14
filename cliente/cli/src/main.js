import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { uppering, removingLine } from '@/filters'; 
import router from '@/router';
// import axios from 'axios';
// import VueAxios from 'vue-axios';


Vue.config.productionTip = false

Vue.filter('uppering', uppering);
Vue.filter('removingLine', removingLine);
Vue.use(BootstrapVue);
// Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API
// axios.defaults.baseURL = 'http://localhost:3000/api';
// axios.defaults.baseURL = 'mongodb://localhost:27017/primerBd';

new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')

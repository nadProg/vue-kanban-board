import Vue from 'vue';
import TheApp from './TheApp.vue';

import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(TheApp),
}).$mount('#app');

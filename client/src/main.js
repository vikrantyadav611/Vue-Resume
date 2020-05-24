import Vue from 'vue'
import App from './App.vue'
// import router from 'vue-router'
import { store } from './store'
import {router} from "./router";

Vue.config.productionTip = false
Vue.use(router)

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");

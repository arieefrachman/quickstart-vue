import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CoreUi from "@coreui/coreui";
import CoreuiVue from "@coreui/vue";
Vue.use(CoreuiVue);
Vue.use(CoreUi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

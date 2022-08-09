import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vmodal from "vue-js-modal";
import vueSmoothScroll from "vue-smooth-scroll";
import Tracker from "./common/tracker";
import "./globalComponents";
import "@/plugins";
Vue.use(vueSmoothScroll);
Vue.use(vmodal);
Vue.use(Tracker);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

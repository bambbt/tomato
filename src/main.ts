import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//import directives
import './directives/ReadLessDirective'

//import styles 
import 'bootstrap/dist/css/bootstrap.min.css'

//import services
import { ClientSideStorageAccessor } from '@/service/clientSideStorage/ClientSideStorageAccessor'

Vue.config.productionTip = false;

ClientSideStorageAccessor.selectDefaultStrategy();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

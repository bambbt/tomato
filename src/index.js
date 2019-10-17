/**Bootstrap module**/
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/global.css";
/** Font awesome dependency **/

import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

/** Vue dependencies**/
import Vue from "../node_modules/vue/dist/vue.esm.js";
import VueRouter from "../node_modules/vue-router/dist/vue-router.esm.js";
import "../src/components/_globals";

import AddFoodVue from "./pages/AddFood.vue";
import AboutVue from "./pages/About.vue";
import SuggestionVue from "./pages/Suggestion.vue";
import KitchenVue from "./pages/Kitchen.vue";
import FavoritesVue from "./pages/favorites.vue";

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
Vue.use(VueRouter);
// Vue.config.ignoredElements = [/^ion-/]

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/suggestions", component: SuggestionVue },
  { path: "/myKitchen", component: KitchenVue },
  { path: "/scanFood", component: AddFoodVue },
  { path: "/favoritesRecipes", component: FavoritesVue },
  { path: "/about", component: AboutVue }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount("#app");

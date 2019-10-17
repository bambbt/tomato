import Vue from "vue";
import VueRouter from "vue-router";
import AddFoodVue from "../views/AddFood.vue";
import AboutVue from "../views/About.vue";
import SuggestionVue from "../views/Suggestion.vue";
import KitchenVue from "../views/Kitchen.vue";
import FavoritesVue from "../views/favorites.vue";

Vue.use(VueRouter);



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


// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

<template>
  <div id="app">
    <nav
      class="navbar sticky-top navbar-light shadow-sm p-3 rounded-bottom"
      style="background-color: #388200"
    >
      <span class="navbar-brand h1" style="color:#FEF2E4">
        <img
          src
          style="background: purple"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        PRUNE
      </span>
      <span class="navbar-brand h1" style="color:#FEF2E4">BBT</span>
    </nav>
    <div id="view" class="container mt-4" style="height: 70vh;">
      <router-view></router-view>
    </div>
    <nav
      class="navbar fixed-bottom navbar-light shadow-sm rounded-top border-top"
      style="background-color: #388200"
    >
      <div class="container">
        <nav-item-component
          target="suggestions"
          badge="0"
          img-src="chef-blank.png"
          img-width="30"
          img-height="30"
        ></nav-item-component>

        <nav-item-component
          target="myKitchen"
          badge="0"
          img-src="fridge-blank.png"
          img-width="30"
          img-height="30"
        ></nav-item-component>

        <nav-item-component
          target="scanFood"
          badge="0"
          img-src="camera-blank.png"
          img-width="30"
          img-height="30"
        ></nav-item-component>

        <nav-item-component
          target="favoritesRecipes"
          badge="0"
          img-src="heart-blank.png"
          img-width="30"
          img-height="30"
        ></nav-item-component>

        <nav-item-component
          target="about"
          badge="0"
          img-src="gears-blank.png"
          img-width="30"
          img-height="30"
        ></nav-item-component>
      </div>
    </nav>
  </div>
</template>
<script>
import Vue from "vue";
//import components
import NavItemComponent from "./components/navigation/NavItemComponent";

export default Vue.extend({
  components: {
    NavItemComponent
  }
});
</script>
<style>
html,
body,
#app {
  height: 100vh;
  width: 100vw;
}

body {
  background-color: #e4dacb;
}

.router-link-active {
  border-bottom: 3px solid #f5be41;
}

#view > div {
  overflow-x: hidden;
  overflow-y: auto;
  height: inherit;
}
</style>

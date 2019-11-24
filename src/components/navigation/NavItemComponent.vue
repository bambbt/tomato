<template>
  <router-link v-bind:to="`${target}`">
    <a class="nav-item nav-link">
      <img
        v-bind:src="getImgURL(imgSrc)"
        v-bind:height="imgHeight+'vh'"
        v-bind:width="imgWidth+'vw'"
        class='img-fluid'
      />
      <span v-if="Number.parseInt(badge) > 0" class="badge badge-success">{{badge}}</span>
    </a>
  </router-link>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.component("nav-item", {
  props: {
    imgSrc: String,
    imgWidth: String,
    imgHeight: String,
    target: String,
    badge: String
  },
  methods: {
    getImgURL(path: string) {
      return require(`../../assets/icons/${path}`);
    }
  }
});
</script>
<style>
</style>
<template>
  <div class="card shadow-sm p-3 mb-3 bg-white rounded">
    <img v-bind:src="getImgURL(imgSrc)" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title">{{title}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="card-text">{{summary}}</p>
          <router-link :to="`${link}`" tag="a" class="btn btn-primary">Let's cook !</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.component("suggestion-card", {
  props: {
    imgSrc: String,
    title: String,
    summary: String,
    link: String
  },
  methods: {
    getImgURL(path: string) {
      return path;
    }
  }
});
</script>
<style>
</style>
<template>
  <router-link v-bind:to="`${link}`" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{title}}</h5>
      <small>
        <span v-bind:class="`${level.style}`">{{level.value}}</span>
        <br />
        <span>{{duration}} mins</span>
      </small>
    </div>
    <p class="mb-1">{{shorterSummary}}</p>
    <div class="d-flex flex-row-reverse justify-content-between align-items-center">
      <small>
        <span class="badge badge-warning badge-pill">{{missedIngredients}}</span>
      </small>
    </div>
  </router-link>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.component("recipe-list-item", {
  props: {
    link: String,
    title: String,
    summary: String,
    duration: Number,
    level: {
      type: Object,
      default: function() {
        return { style: "text-success", value: "DEFINE" };
      }
    },
    missedIngredients: Number
  },
  computed: {
    shorterSummary: function() {
      return this.summary.slice(0, 87) + " ...";
    }
  }
});
</script>
<style>
</style>

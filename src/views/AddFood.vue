<template>
  <div>
    <form @submit="addProduct">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="product.name" class="form-control" id="name" />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="text" v-model="product.quantity" class="form-control" id="quantity" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Product } from "../types/Product";

export default Vue.extend({
  data() {
    return {
      product: {} as Product
    };
  },
  methods: {
    addProduct: function(e: any) {
      this.$store.commit("addProduct", this.product);
      this.product = {} as Product;
      e.preventDefault();
    }
  }
});
</script>

<style></style>

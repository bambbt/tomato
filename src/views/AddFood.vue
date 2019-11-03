<template>
  <div>
    <form @submit.prevent="addProduct">
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
import { ClientSideStorage } from "../service/clientSideStorage/ClientSideStorage";

export default Vue.extend({
  data() {
    return {
      product: {} as Product
    };
  },
  methods: {
    addProduct: function(e: any) {
      this.$store.commit("addProduct", this.product);
      ClientSideStorage.setItem("products", this.$store.getters.getProducts);
      this.product = {} as Product;
    }
  }
});
</script>

<style></style>

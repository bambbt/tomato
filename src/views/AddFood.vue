<template>
  <div>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="product.name" class="form-control" id="name" />
        <p v-if="showErrors" class="text-danger">
          <b>Must contain letters and/or spaces.</b>
          <br />
          <b>20 characters max.</b>
        </p>
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="text" v-model="product.quantity" class="form-control" id="quantity" />
        <p v-if="showErrors" class="text-danger">
          <b>Quantity must be below 9999.</b>
          <br />
          <b>Measure unit ( 4 characters max. ) and spaces allowed.</b>
          <br />
          <b>Example: 23 Kg.</b>
        </p>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ClientSideStorageAccessor } from "../service/clientSideStorage/ClientSideStorageAccessor";
import { Product } from "@/types/product";

export default Vue.extend({
  data() {
    return {
      isValid: true as boolean,
      product: {} as Product
    };
  },
  computed: {
    showErrors: function(): boolean {
      return !this.isValid;
    }
  },
  methods: {
    addProduct: function(e: any) {
      if (this.product.name === undefined || this.product.quantity === undefined) {
        this.isValid = false;
        return;
        }
      this.isValid =
        this.product.name.search(/^([A-Za-z- ]{0,20})$/) != -1 &&
        this.product.quantity.search(
          /^([0-9]{1,4})([ ]{0,1})([A-Za-z]{0,4})$/
        ) != -1;
      if (this.isValid) {
        this.product.quantity = this.product.quantity.trim();
        this.product.name = this.product.name.trim();
        this.$store.commit("addProduct", this.product);
        this.product = {} as Product;
      }
    }
  }
});
</script>

<style></style>

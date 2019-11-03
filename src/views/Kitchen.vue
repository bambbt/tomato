<template>
  <div>
    <form style="height: fit-content">
      <div class="form-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
      </div>
    </form>
    <ul class="list-group" style="overflow-y:auto; height: 60vh">
      <li
        v-for="product in products"
        v-bind:key="product.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{product.name}}
        <span class="badge badge-primary badge-pill">{{product.quantity}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  }
};
</script>
<style></style>

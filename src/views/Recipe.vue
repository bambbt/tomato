<template>
  <div id="carouselExampleFade" class="carousel slide" data-interval="false" data-touch="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card shadow-sm p-3 mb-3 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title">Start!</h5>
            <p class="card-text">
              Slide left or right!
              <br />
              <strong>Let's get this stove fired up!</strong>
            </p>
          </div>
        </div>
      </div>
      <template v-for="(instruction,instructionIdx) in instructions">
        <div
          class="carousel-item"
          v-for="(step, stepIdx) in instruction.steps"
          v-bind:key="step.id"
        >
          <div class="card shadow-sm p-3 mb-3 bg-white rounded">
            <div class="card-body">
              <h5 class="card-title">Ingredients</h5>
              <div class="row">
                <div
                  class="col"
                  v-for="column in arrayAscolumns(step.ingredients,2)"
                  v-bind:key="column.id"
                >
                  <ul>
                    <li v-for="ingredient in column.data" v-bind:key="ingredient">{{ingredient}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow-sm p-3 mb-3 bg-white rounded">
            <div class="card-body">
              <h5 class="card-title">{{`Instructions Part ${instructionIdx+1}`}}</h5>
              <h6
                class="card-subtitle mb-2 text-muted"
              >{{`Step ${stepIdx+1} of ${instruction.steps.length}`}}</h6>
              <p class="card-text">{{step.explanation}}</p>
            </div>
          </div>
        </div>
      </template>
      <div class="carousel-item">
        <div class="card shadow-sm p-3 mb-3 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title">Done!</h5>
            <p class="card-text">You are finished!</p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    this.$store.dispatch(
      "fetchInstructions",
      parseInt(this.$route.params.recipe_id)
    );
  },
  computed: {
    instructions() {
      return this.$store.getters.getRecipeInstructions;
    }
  },
  methods: {
    arrayAscolumns: function(
      items: Array<String>,
      nbCols: number
    ): Array<Object> {
      let columns = [];
      let mid = Math.ceil(items.length / nbCols);
      for (let col = 0; col < nbCols; col++) {
        columns.push({
          id: col,
          data: items.slice(col * mid, col * mid + mid)
        });
      }
      return columns;
    }
  }
});
</script>
<style scoped>
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  display: inline-block;
  width: 3vw;
  height: 3vh;
}
</style>

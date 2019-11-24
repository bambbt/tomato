<template>
  <div>
    <div class="row">
      <div class="col" v-if="cardRecipe !== undefined">
        <suggestion-card-component
          v-bind:imgSrc="cardRecipe.image"
          v-bind:title="cardRecipe.title"
          summary="Nothing is better than a meal from home!"
          :link="`/recipe/${cardRecipe.id}`"
        ></suggestion-card-component>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="list-group">
          <recipe-list-item-component
            v-for="recipe in recipes"
            v-bind:key="recipe.id"
            :title="recipe.title"
            :link="`/recipe/${recipe.id}`"
            v-bind:duration="10"
            summary="Eat, eat, eat!"
            v-bind:level="{style:'text-success', value:'EASY'}"
            v-bind:missed-ingredients="recipe.missedIngredientCount"
          ></recipe-list-item-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionCardComponent from "./../components/suggestion/SuggestionCardComponent";
import RecipeListItemComponent from "./../components/recipe/RecipeListItemComponent";
export default {
  data() {
    return {};
  },
  created() {
    if (
      this.$store.getters.getRecipes.length === 0 &&
      this.$store.getters.getProducts.length > 0
    ) {
      this.$store.dispatch("fetchRecipes", this.$store.getters.getProducts);
    }
  },
  methods: {},
  computed: {
    recipes() {
      return this.$store.getters.getRecipes;
    },
    cardRecipe() {
      return this.$store.getters.getRecipe(0);
    }
  },
  components: {
    SuggestionCardComponent,
    RecipeListItemComponent
  }
};
</script>

<style></style>

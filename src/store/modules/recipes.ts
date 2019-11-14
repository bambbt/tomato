import { ClientSideStorageAccessor } from '@/service/clientSideStorage/ClientSideStorageAccessor';
import Recipe from '@/types/recipe';
import RecipeService from '@/service/api/recipeService';
import { Product } from '@/types/product';

export default {
    namespace: true,
    state: {
        recipes: [] as Array<Recipe>,
    },
    mutations: {
        setRecipes: (state: any, recipes: Array<Recipe>) => {
            state.recipes = recipes;
        }
    },
    getters: {
        getRecipes: (state: any): Array<Recipe> => {
            return state.recipes;
        },
        getRecipe: (state: any) => (index: number): Recipe => {
            return state.recipes[index];
        }
    },
    actions: {
        fetchRecipes: (context: any, ingredients: Array<Product>) => {
            RecipeService.getListByIngredients(ingredients.flatMap(it => it.name))
                .then(function (response: any) {
                    let recipes: Array<Recipe> = response.data;
                    context.commit('setRecipes', recipes);
                })
                .catch(function (error: any) {
                    console.error(error)
                });
        }
    }
}
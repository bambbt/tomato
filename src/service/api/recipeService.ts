import Recipe from '../../types/recipe'
import axios from "axios"
export default class RecipeService {

    private static remainingPoints: number = 150
    public static readonly nbRecipesExpected: number = 10

    public static getListByIngredients(ingredients: Array<string>) {
        RecipeService.remainingPoints = RecipeService.remainingPoints - (0.01 * RecipeService.nbRecipesExpected + 1);
        console.log(ingredients.join(','));
        return axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
            params: {
                ingredients: ingredients.join(','),
                number: RecipeService.nbRecipesExpected,
                apiKey: 'REPLACE WITH API KEY'
            }
        });
    }
}
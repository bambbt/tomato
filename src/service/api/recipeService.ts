import axios from "axios"
export default class RecipeService {

    private static remainingPoints: number = 150
    public static readonly nbRecipesExpected: number = 10

    public static getListByIngredients(ingredients: Array<string>) {
        RecipeService.remainingPoints = RecipeService.remainingPoints - (0.01 * RecipeService.nbRecipesExpected + 1);
        return axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
            params: {
                ingredients: ingredients.join(','),
                number: RecipeService.nbRecipesExpected,
                apiKey: 'fc9eb28ac7bd478d97caad7bf209f018'
            }
        });
    }

    public static getRecipeInstructions(id: number) {
        RecipeService.remainingPoints = RecipeService.remainingPoints - (0.01 * RecipeService.nbRecipesExpected + 1);
        return axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`, {
            params: {
                apiKey: 'fc9eb28ac7bd478d97caad7bf209f018'
            }
        });
    }
}
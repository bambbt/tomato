import Recipe from '@/types/recipe';
import RecipeService from '@/service/api/recipeService';
import { Product } from '@/types/product';
import Instruction from '@/types/instruction';
import Step from '@/types/step';

export default {
    namespace: true,
    state: {
        recipes: [] as Array<Recipe>,
        instructions: [] as Array<Instruction>
    },
    mutations: {
        setRecipes: (state: any, recipes: Array<Recipe>) => {
            state.recipes = recipes;
        },
        setCurrentRecipeInstructions: (state: any, instructions: Array<Instruction>) => {
            // state.instructions.splice(0, state.instructions.length);
            // state.instructions.push(instructions);
            state.instructions = instructions;
        }
    },
    getters: {
        getRecipes: (state: any): Array<Recipe> => {
            return state.recipes;
        },
        getRecipe: (state: any) => (index: number): Recipe => {
            return state.recipes[index];
        },
        getRecipeInstructions: (state: any): Array<Instruction> => {
            return state.instructions;
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
        },
        fetchInstructions: (context: any, id: number) => {
            RecipeService.getRecipeInstructions(id)
                .then(function (response: any) {
                    let instructions = [] as Array<Instruction>;
                    let i: number = 0;
                    let j: number = 0;
                    response.data.forEach((item: any) => {
                        let instruction = {} as Instruction;
                        instruction.id = i++;
                        instruction.title = item.name;
                        instruction.steps = [];
                        item.steps.forEach((elem2: any) => {
                            let step = {} as Step;
                            step.id = j++;
                            step.number = elem2.number;
                            step.ingredients = elem2.ingredients.flatMap((it: any) => it.name);
                            step.explanation = elem2.step;
                            instruction.steps.push(step);
                        });
                        instructions.push(instruction);
                    });
                    context.commit('setCurrentRecipeInstructions', instructions)
                })
                .catch(function (error: any) {
                    console.error(error);
                })
        }
    }
}
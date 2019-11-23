import Instruction from './instruction';

export default interface Recipe {
    id: number,
    image: string,
    missedIngredientCount: Number,
    title: string
    instructions: Array<Instruction>
}
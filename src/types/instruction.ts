import Step from './step';

export default interface Instruction {
    id: number,
    title: string,
    steps: Array<Step>
}
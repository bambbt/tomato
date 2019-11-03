export abstract class IClientStorage {

    constructor(type: string) {
        console.log(`${type} is instanciated`);
    }

    abstract setItem(name: string, value: any): void;
    abstract getItem(name: string): any;
    abstract removeItem(name: string): void;
    abstract clear(): void;
}
import { IClientStorageAccessor } from '../IClientStorageAccessor';

export class LocalStorageAccessor extends IClientStorageAccessor {

    constructor() {
        super('Local storage');
    }

    setItem(name: string, value: any): void {
        window.localStorage.setItem(name, JSON.stringify(value))
    }

    getItem(name: string): any {
        let value = window.localStorage.getItem(name);
        if (value !== null) {
            return JSON.parse(value);
        } else {
            return null;
        }
    }

    removeItem(name: string): void {
        window.localStorage.removeItem(name);
    }

    clear(): void {
        window.localStorage.clear();
    }
}
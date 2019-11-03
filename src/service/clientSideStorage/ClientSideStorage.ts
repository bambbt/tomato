import { IClientStorage } from './IClientStorage';
import { MyLocalStorage } from './storage/MyLocalStorage';

export class ClientSideStorage {

    private static strategy: IClientStorage;

    public static selectDefaultStrategy(): void {
        if (ClientSideStorage.isLocalStorageSupported()) {
            ClientSideStorage.strategy = new MyLocalStorage();
        } else {
            console.warn('This browser doesn\'t support IndexedDB');
        }
    }

    public static setStrategy(strategy: IClientStorage): void {
        if (ClientSideStorage.isLocalStorageSupported()) {
            ClientSideStorage.strategy = strategy;
        } else {
            console.warn('This browser doesn\'t support IndexedDB');
        }
    }

    private static isLocalStorageSupported(): boolean {
        let test: string = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    public static setItem(name: string, value: any): void {
        ClientSideStorage.strategy.setItem(name, value);
    }

    public static getItem(name: string): any {
        return ClientSideStorage.strategy.getItem(name);
    }

    public static clear(): void {
        ClientSideStorage.strategy.clear();
    }

    public static removeItem(name: string): any {
        ClientSideStorage.strategy.removeItem(name);
    }
}
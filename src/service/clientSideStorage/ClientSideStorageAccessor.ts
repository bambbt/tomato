import { IClientStorageAccessor } from './IClientStorageAccessor';
import { LocalStorageAccessor } from './clientStorageAccessors/LocalStorageAccessor';

export class ClientSideStorageAccessor {

    private static strategy: IClientStorageAccessor;

    public static selectDefaultStrategy(): void {
        if (ClientSideStorageAccessor.isLocalStorageSupported()) {
            ClientSideStorageAccessor.strategy = new LocalStorageAccessor();
        } else {
            console.warn('This browser doesn\'t support localStorage');
        }
    }

    public static setStrategy(strategy: IClientStorageAccessor): void {
        ClientSideStorageAccessor.strategy = strategy;
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
        ClientSideStorageAccessor.strategy.setItem(name, value);
    }

    public static getItem(name: string): any {
        return ClientSideStorageAccessor.strategy.getItem(name);
    }

    public static clear(): void {
        ClientSideStorageAccessor.strategy.clear();
    }

    public static removeItem(name: string): any {
        ClientSideStorageAccessor.strategy.removeItem(name);
    }
}
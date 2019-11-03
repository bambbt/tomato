import { IClientStorage } from './IClientStorage';
import { IndexedDbStorage } from './storage/IndexedDbStorage';

export class ClientSideStorage {

    private static strategy: IClientStorage;

    public static autoSelectStrategy(): void {
        if (('indexedDB' in window)) {
            ClientSideStorage.strategy = new IndexedDbStorage();
        } else {
            console.warn('This browser doesn\'t support IndexedDB');
        }
        return;
    }
}
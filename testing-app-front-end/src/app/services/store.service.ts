import { Injectable } from '@angular/core';

const NAMESPACE = 'testApp-';

@Injectable()
export class StorageService {

    constructor() {}

    get(key: string): any {
        return JSON.parse(window.localStorage.getItem(NAMESPACE + key));
    }

    set(key: string, value: any) {
        return window.localStorage.setItem(NAMESPACE + key, JSON.stringify(value));
    }

    has(key: string):boolean {
        return window.localStorage.hasOwnProperty(NAMESPACE + key);
    }

    remove(key: string): any {
        return window.localStorage.removeItem(NAMESPACE + key);
    }
}
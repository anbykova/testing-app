import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { TransportService } from './transport.service';
import { StorageService } from './store.service';
import { UserStore } from '../store-wrappers/user.store';

import "rxjs/add/operator/map";

import { AuthService } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    public user: any;

    constructor(
        private store: StorageService,
        private router: Router,
        private userStore: UserStore,
        private authService: AuthService,
        private transportService: TransportService
    ) {
        this.getCurrentUser().subscribe(user => {
            if (user) {
                this.setUserTolocalStorage(user);
            } else if (this.isUserInlocalStorage()) {
                let localStorageUser = this.getUserFromlocalStorage();
                this.userStore.dispatchLogin(localStorageUser);
            }
        });
    }

    getCurrentUser() {
        return this.userStore.selectCurrentUser();
    }

    setCurrentUser(newUser: any): void {
        this.setUserTolocalStorage(newUser);
        this.dispatchLogin(newUser);        
    }

    dispatchLogin(newUser) {
        this.userStore.dispatchLogin(newUser);
    }

    dispatchLogout() {
        this.userStore.dispatchLogout();
    }

    setUserTolocalStorage(newUser) {
        this.store.set('profile', newUser);
    }

    isUserInlocalStorage() {
        return this.store.has('profile');
    }

    removeUserFromlocalStorage() {
        this.store.remove('profile');
    }

    getUserFromlocalStorage() {
        return this.store.get('profile');
    }
}

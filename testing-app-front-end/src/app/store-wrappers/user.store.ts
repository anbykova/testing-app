import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../states';
import { LoginAction, LogoutAction } from '../actions/user.action';
import * as userState from '../states/user.state';

@Injectable()
export class UserStore{
    constructor(
        private store: Store<fromRoot.IStateApp>
    ) {}

    dispatchLogin(user): void {
        this.store.dispatch(new LoginAction(user));
    }

    dispatchLogout(): void {
        this.store.dispatch(new LogoutAction());
    }

    selectCurrentUser():Observable<any> {
        return this.store.select(userState.getCurrentUser);
    }
}


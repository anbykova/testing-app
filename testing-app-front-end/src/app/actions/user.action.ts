
import { Action } from '@ngrx/store';

export const UserActionTypes = {
    LOGIN: '[User] Login',
    LOGOUT: '[User] Logout'
};

export class LoginAction implements Action {
    type = UserActionTypes.LOGIN;
    public payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }
}

export class LogoutAction implements Action {
    type = UserActionTypes.LOGOUT;
    public payload: any;

    constructor(payload?: any) {}
}

export type UserAction =
    LoginAction
    | LogoutAction;
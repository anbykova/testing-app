//import { createSelector } from 'reselect';
import { UserAction, UserActionTypes } from '../actions/user.action';
import { IState, initialState } from '../states/user.state';

export function reducer(state: IState = initialState, action: UserAction): IState {
    switch (action.type) {
        case UserActionTypes.LOGIN: {
            return Object.assign({}, state, {
                currentUser: action.payload
            });
        }
        case UserActionTypes.LOGOUT: {
            return Object.assign({}, state, {
                currentUser: null
            });
        }
        default: {
            return state;
        }
    }
}

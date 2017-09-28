//import { createSelector } from 'reselect';
import { TestsAction, TestsActionTypes } from '../actions/tests.action';
import { IState, initialState } from '../states/user.state';

export function reducer(state: IState = initialState, action: TestsAction): IState {
    switch (action.type) {
        case TestsActionTypes.SETMYTESTS: {
            return Object.assign({}, state, {
                myTests: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

//import { createSelector } from 'reselect';
import { SetMyGroupsAction, GroupsActionTypes } from '../actions/groups.action';
import { IState, initialState } from '../states/user.state';

export function reducer(state: IState = initialState, action: SetMyGroupsAction): IState {
    switch (action.type) {
        case GroupsActionTypes.SETMYGROUPS: {
            return Object.assign({}, state, {
                myTests: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

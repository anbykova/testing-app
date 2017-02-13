import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
//import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import { IStateApp } from '../states';

import * as userReducer from './user.reducer';
import * as testsReducer from './tests.reducer';
import * as groupsReducer from './groups.reducer';

const reducers = {
    user: userReducer.reducer,
    tests: testsReducer.reducer,
    groups: groupsReducer.reducer
};

const productionReducer: ActionReducer<IStateApp> = combineReducers(reducers);

export function reducer(state: any, action: any) {
        return productionReducer(state, action);
}
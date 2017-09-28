//import { IUser } from '../models/User';
import { createSelector } from 'reselect';
import * as fromRoot from './index';

export interface IState {
    currentUser: any
};

export const initialState: IState = {
    currentUser: null
};

export const getUserState = (state: fromRoot.IStateApp) => state.user;

export const getCurrentUser = createSelector((state: fromRoot.IStateApp) => state.user, (state: IState) => state.currentUser);
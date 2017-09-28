import { createSelector } from 'reselect';
import * as fromRoot from './index';

export interface IState {
    myGroups: any;
};

export const initialState: IState = {
    myGroups: null,
};

export const getGroupsState = (state: fromRoot.IStateApp) => state.groups;

export const getMyTests = createSelector(getGroupsState, (state: IState) => state.myGroups);
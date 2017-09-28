import { createSelector } from 'reselect';
import * as fromRoot from './index';

export interface IState {
    myTests: any;
};

export const initialState: IState = {
    myTests: null,
};

export const getTestsState = (state: fromRoot.IStateApp) => state.tests;

export const getMyTests = createSelector(getTestsState, (state: IState) => state.myTests);
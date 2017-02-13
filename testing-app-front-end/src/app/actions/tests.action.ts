import { Action } from '@ngrx/store';

export const TestsActionTypes = {
    SETMYTESTS: '[Tests] setMyTests',
};

export class SetMyTestsAction implements Action {
    type = TestsActionTypes.SETMYTESTS;
    public payload: Array<any>;

    constructor(payload: Array<any>) {
        this.payload = payload;
    }
}

export type TestsAction =
    SetMyTestsAction;
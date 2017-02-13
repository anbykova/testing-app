import { Action } from '@ngrx/store';

export const GroupsActionTypes = {
    SETMYGROUPS: '[Tests] setMyGroups',
};

export class SetMyGroupsAction implements Action {
    type = GroupsActionTypes.SETMYGROUPS;
    public payload: Array<any>;

    constructor(payload: Array<any>) {
        this.payload = payload;
    }
}

export type GroupsAction =
    SetMyGroupsAction; 
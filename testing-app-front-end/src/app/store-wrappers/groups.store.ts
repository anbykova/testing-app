import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../states';
import { SetMyGroupsAction } from '../actions/groups.action';
import * as groupsState from '../states/groups.state';

@Injectable()
export class GroupsStore{
    constructor(
        private store: Store<fromRoot.IStateApp>
    ) {}

    dispatchSetMyGroups(tests): void {
        this.store.dispatch(new SetMyGroupsAction(tests));
    }

    selectMyTests(): Observable<any> {
        return this.store.select(groupsState.getMyTests);
    }
}


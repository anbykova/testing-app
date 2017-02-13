import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../states';
import { SetMyTestsAction } from '../actions/tests.action';
import * as testsState from '../states/tests.state';

@Injectable()
export class TestsStore{
    constructor(
        private store: Store<fromRoot.IStateApp>
    ) {}

    dispatchSetMyTests(tests): void {
        this.store.dispatch(new SetMyTestsAction(tests));
    }

    selectMyTests(): Observable<any> {
        return this.store.select(testsState.getMyTests);
    }
}


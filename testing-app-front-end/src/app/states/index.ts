import * as userState from './user.state';
import * as testsState from './tests.state';
import * as groupsState from './groups.state';

export interface IStateApp {
    user: userState.IState;
    tests: testsState.IState;
    groups: groupsState.IState;
}
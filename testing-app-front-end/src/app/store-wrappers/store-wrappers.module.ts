import { NgModule } from '@angular/core';
import { UserStore } from './user.store';
import { TestsStore } from './tests.store';
import { GroupsStore } from './groups.store';

@NgModule({
    imports: [],
    providers: [
        UserStore,
        TestsStore,
        GroupsStore
    ],
    declarations: []
})
export class StoreWrappersModule {}
import { Injectable } from '@angular/core'
import { TransportService } from '../../../../services/transport.service';
import { GroupsStore } from '../../../../store-wrappers/groups.store';
import { Response } from '@angular/http';

@Injectable()
export class GroupsService {

    constructor(private transportService: TransportService,
                private groupsStore: GroupsStore) {
    }

    getGroups() {
        return this.transportService.get('/groups')
            .map((r: Response) => r.json())
            .subscribe({
                next: (res) => {
                    this.setGroupsToStore(res);
                },
                error: (error: any) => {}
            });
    }

    setGroupsToStore(tests: Array<any>) {
        this.dispatchGroups(tests);
    }

    dispatchGroups(tests) {
        this.groupsStore.dispatchSetMyGroups(tests);
    }

    getGroupsFromStore() {
        return this.groupsStore.selectMyTests();
    }
}

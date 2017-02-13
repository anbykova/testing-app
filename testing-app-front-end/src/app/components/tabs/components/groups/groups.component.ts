import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service'

@Component({
    selector: 'tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss']
})
export class GoupsComponent implements OnInit {
    public myGroups: Array<any> = []; 

    constructor(private groupsService: GroupsService) {
    }

    ngOnInit() {
        this.groupsService.getGroups();
        this.groupsService.getGroupsFromStore().subscribe((myGroups) => {
            this.myGroups = myGroups;
        });
    }

    //TO DO: create ngOnDestroy
}

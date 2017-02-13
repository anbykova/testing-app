import { Component, OnInit } from '@angular/core';
import { TestsService } from './tests.service'

@Component({
    selector: 'tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
    public myTests: Array<any> = []; 

    constructor(private testsService: TestsService) {
    }

    ngOnInit() {
        this.testsService.getTests();
        this.testsService.getTestsFromStore().subscribe((myTests) => {
            this.myTests = myTests;
        });
    }

    //TO DO: create ngOnDestroy
}

import { Injectable } from '@angular/core'
import { TransportService } from '../../../../services/transport.service';
import { TestsStore } from '../../../../store-wrappers/tests.store';
import { UserStore } from '../../../../store-wrappers/user.store';
import { Response } from '@angular/http';

@Injectable()
export class TestsService {

    constructor(private transportService: TransportService,
                private testsStore: TestsStore,
                private userStore: UserStore) {
    }

    ngOnInit() {

    }

    getTests() {
        return this.transportService.get('/tests')
            .map((r: Response) => r.json())
            .subscribe({
                next: (res) => {
                    this.setTestsToStore(res);
                },
                error: (error: any) => {      
                }
            });
    }

    setTestsToStore(tests: Array<any>) {
        this.dispatchTests(tests);
    }

    dispatchTests(tests) {
        this.testsStore.dispatchSetMyTests(tests);
    }

    getTestsFromStore() {
        return this.testsStore.selectMyTests();
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent extends OnInit {

    public activeTab: string = 'tests'; 

    ngOnInit() {
    }

    isActiveTab(tab: string): boolean {
        return tab === this.activeTab;
    }

    makeActiveTab(newActiveTab: string): void {
        this.activeTab = newActiveTab;
    }
}

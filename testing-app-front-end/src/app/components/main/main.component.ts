import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

    constructor(private authService: AuthService, private router: Router){
    }

    logout() {
        this.authService.logout();    
    }

    goToProfile() {
        this.router.navigate(['main/profile']);
    }

    goToNews() {
        this.router.navigate(['main/news']);
    }
}

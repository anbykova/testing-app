import { TransportService } from './transport.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AuthService as Auth } from 'ng2-ui-auth';


@Injectable()
export class AuthService {

    constructor(private transportService: TransportService,
                private router: Router,
                private auth: Auth,
                private userService: UserService) {
    }

    login() {   
        this.auth.authenticate('google')
            .subscribe({
                next: (res) => {
                    let data = res.json().data;
                    this.userService.setCurrentUser(data.profile);
                    this.router.navigate(['home']);
                },
                error: (err: any) => {
                    let errorMessage = err.json();
                    this.router.navigate(['login']);
                },
                complete: () => {
                    this.router.navigate(['']);
                }
            });
    }

    logout() {
        this.auth.logout()
            .subscribe({
                next: () => {
                    this.userService.dispatchLogout();
                    this.userService.removeUserFromlocalStorage();
                    this.router.navigate(['login']);
                },
                error: (err: any) => this.router.navigate(['home'])
            });   
    }
}

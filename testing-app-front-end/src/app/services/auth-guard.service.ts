import {RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate} from '@angular/router';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        return this.userService.getCurrentUser().map((currentUser) => {
            if (currentUser) {
                return true;
            }
            console.log('unauthenticated navigating to login');
            this.router.navigate(['login'], { queryParams: next.queryParams });
            return false;
        }).first();   
    }
}
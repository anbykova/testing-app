import {RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate} from '@angular/router';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        return this.userService.getCurrentUser().map((currentUser) => {
            if (!currentUser) {
                return true;
            }
            this.router.navigateByUrl('home');
            return false;
        }).first();
    }
}
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public showSpinner: boolean;

    constructor(private authService: AuthService){
    }

    loginWithGoogle() {
        this.authService.login();
    }
}

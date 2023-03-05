import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AuthUserModel } from './models/authUser.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn$!: Observable<AuthUserModel | null>;

  constructor(private authService: AuthService){
    this.loggedIn$ = this.authService.loggedInStatus$
  }


}

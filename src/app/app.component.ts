import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AtuhUserModel } from './models/authUser.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn$!: Observable<AtuhUserModel | null>;

  constructor(private authService: AuthService){
    this.loggedIn$ = this.authService.loggedInStatus$
  }


}

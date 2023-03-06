import { UserModel } from './../models/user.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthUserModel } from '../models/authUser.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_URL: string = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/';

  private loggedInStatus: BehaviorSubject<AuthUserModel | null> = new BehaviorSubject<AuthUserModel | null>(null);

   get loggedInStatus$ (): Observable<AuthUserModel | null> {
    return this.loggedInStatus.asObservable();
  }

  constructor( private http: HttpClient, private router: Router, private toaster: ToastrService ) { }


   loginUser(loginData: UserModel): Observable<AuthUserModel> {
    const body = JSON.stringify(loginData);
    const headers = {
      "Applicant-Id": environment.webstar.appId,
      "Content-Type": "application/json"
   }
    return this.http.post<AuthUserModel>(this.AUTH_URL, body, {headers: headers}).pipe(
      tap((authUser: AuthUserModel)=> {
        this.loggedInStatus.next(authUser);
        this.toaster.success('Logged in Succesful')
        this.router.navigate(['select-character']);
      }),
      catchError((error: HttpErrorResponse) => {
        this.toaster.error(error.error['error'])
        return of(error.error['error']);
      })
    )
  }

    logoutUser(): void {
    this.loggedInStatus.next(null);
    this.toaster.info('May the force be with you!')
    this.router.navigate([''])
  }

}

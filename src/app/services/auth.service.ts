import { UserModel } from './../models/user.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AtuhUserModel } from '../models/authUser.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_URL: string = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/';


  private loggedInStatus: BehaviorSubject<AtuhUserModel | null> = new BehaviorSubject<AtuhUserModel | null>(null);

   get loggedInStatus$ (): Observable<AtuhUserModel | null> {
    return this.loggedInStatus.asObservable();
  }

  constructor(private toastr: ToastrService, private http: HttpClient, private router: Router ) { }


   loginUser(loginData: UserModel): Observable<AtuhUserModel> {
    const body = JSON.stringify(loginData);
    const headers = {
      "Applicant-Id": environment.webstar.appId,
      "Content-Type": "application/json"
   }
    return from(this.http.post<AtuhUserModel>(this.AUTH_URL, body, {headers: headers})).pipe(
      tap((authUser: AtuhUserModel)=> {
        this.loggedInStatus.next(authUser);
        this.toastr.success('Success Login!')
        this.router.navigate(['select-character']);
      }),
      catchError((error) => {
        this.toastr.error(error.message)
        return error;
      })
    ) as Observable<AtuhUserModel>
  }

   async logoutUser(): Promise<void> {
    this.loggedInStatus.next(null);
    this.toastr.info('Bye. May the Force be with you!')
    this.router.navigate([''])
  }

}

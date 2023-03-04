import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   AUTH_URL = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/';

    data = '{"login":"my_login","password":"my_password"}';

//  headers: {
//   'Content-Type': 'application/json',
//   Applicant-Id: {8ujwRPyT}
// }



  private loggedInStatus: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

   get loggedInStatus$ (): Observable<boolean | null> {
    return this.loggedInStatus.asObservable();
  }

  constructor(private toastr: ToastrService, private http: HttpClient ) { }

  public loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.AUTH_URL, user);
  }


}

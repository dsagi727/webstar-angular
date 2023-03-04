import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean>  {

  return this.authService.loggedInStatus$.pipe(
      tap(user => {
        if(!user){
          this.toastr.warning('You have to login!!')
          this.router.navigate(['']);
        }
      }),
      map(user => user ? true : false)
    )

  }

}

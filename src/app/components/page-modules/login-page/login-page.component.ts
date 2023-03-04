import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AtuhUserModel } from 'src/app/models/authUser.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

   loginForm!: FormGroup;
   errorLogin?: string;

   loginSubs?: Subscription;

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  this.loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  }

  ngOnDestroy (): void {
    this.loginSubs?.unsubscribe()
  }

  userAuth(): void{
    const userLogin = this.loginForm.value;
    if(userLogin){
      console.log(userLogin);
      this.loginSubs = this.authService.loginUser(userLogin).subscribe(
        {
          next: (data: AtuhUserModel) => {console.log(data)},
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
          complete: () => {this.loginForm.reset},
        }
      )
    }

  }

}

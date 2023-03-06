import { SelectCharacterPageComponent } from './components/page-modules/select-character-page/select-character-page.component';
import { LoginPageComponent } from './components/page-modules/login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path: 'select-character', component: SelectCharacterPageComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

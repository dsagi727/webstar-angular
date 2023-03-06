import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from './components/shared/shared.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/page-modules/login-page/login-page.component';
import { SelectCharacterPageComponent } from './components/page-modules/select-character-page/select-character-page.component';
import { CrudManagementComponent } from './components/page-modules/crud-management/crud-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SelectCharacterPageComponent,
    CrudManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

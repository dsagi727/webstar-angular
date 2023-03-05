import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFieldComponent } from './form-components/input-field/input-field.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SelectFieldComponent } from './form-components/select-field/select-field.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    NavbarComponent,
    FooterComponent,
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],exports: [
    NavbarComponent,
    FooterComponent,
    InputFieldComponent,
    SelectFieldComponent
  ]
})
export class SharedModule { }

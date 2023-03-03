import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './form-components/input-field/input-field.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

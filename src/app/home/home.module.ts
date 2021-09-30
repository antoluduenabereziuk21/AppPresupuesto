import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';




@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

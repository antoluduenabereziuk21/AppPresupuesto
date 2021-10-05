import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { TokenInterceptorService } from '../shared/services/token-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [    //jwt
    {
     provide: JWT_OPTIONS ,
     useValue: JWT_OPTIONS
    },
    JwtHelperService,
    // Interceptor
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: TokenInterceptorService,
      multi: true
     }
    ],
})
export class SharedModule { }

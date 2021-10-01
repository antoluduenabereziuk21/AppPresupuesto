import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

//Components
import { AppComponent } from './app.component';
//providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }

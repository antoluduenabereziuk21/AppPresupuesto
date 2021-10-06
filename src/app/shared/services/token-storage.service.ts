import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



const TOKEN_KEY ='token';
const USER_KEY = 'auth-user';

console.log(TOKEN_KEY);
console.log(USER_KEY);
@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) { }

  singOut():void{
    localStorage.clear();
  }
  public saveToken(token: string): void {

    // window.sessionStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY,token);
    console.log("Saving token:"+ token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

 public isAuth():boolean{
    const token:any = this.getToken()
    if (this.jwtHelper.isTokenExpired(token) || !this.getToken()){
      this.router.navigate(['home'])
      return false;
    }
    return true;
  }

  userId(){
    if( this.isAuth() === true){
      const token:any = this.getToken();
      const {id_user} = this.jwtHelper.decodeToken(token);
      console.log(id_user);
      return id_user;
    }
  }
  username(){
    if( this.isAuth() === true){
    const token:any = this.getToken();
    const {email} = this.jwtHelper.decodeToken(token);
    console.log(email);
    return email;
    }
  }

}

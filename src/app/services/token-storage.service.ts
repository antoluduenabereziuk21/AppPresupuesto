import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



const TOKEN_KEY ='token';
@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) { }

  singOut():void{
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    console.log("Saving token:"+JSON.stringify(token))
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

 public isAuth():boolean{
    const token:any = this.getToken()
    if (this.jwtHelper.isTokenExpired(token) || !this.getToken()){
      this.router.navigate(['signin'])
      return false;
    }
    return true;
  }

  userId(){
    if( this.isAuth() === true){
      const token:any = this.getToken();
      const {id_user} = this.jwtHelper.decodeToken(token);
      // console.log(id_user);
      return id_user;
    }
  }
  username(){
    if( this.isAuth() === true){
    const token:any = this.getToken();
    const {user_name} = this.jwtHelper.decodeToken(token);
    // console.log(user_name);
    return user_name;
    }
  }

}

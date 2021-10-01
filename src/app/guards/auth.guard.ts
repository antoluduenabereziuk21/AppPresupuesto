import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor (
    private _tokenStorage: TokenStorageService
){}

  canActivate():boolean {
      if(!this._tokenStorage.isAuth()){
        console.log('token Expired')
        return false;
      }
    return true;
  }

}

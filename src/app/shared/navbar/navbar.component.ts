import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from 'src/app/shared/services/token-storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn :boolean = false;
  user_name:string="";

  constructor(
    private router: Router,
    private _tokenStorage: TokenStorageService,
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this._tokenStorage.getToken();
    console.log("isLoggedIn: "+this.isLoggedIn);
    if (this.isLoggedIn){
      const user = this._tokenStorage.username();
      this.user_name = user;
    }
  }

  home(): void {
    this.router.navigate(['home']);
  }
  signin(): void {
    this.router.navigate(['signin']);
  }
  register(): void {
    this.router.navigate(['register']);
  }

  logOut(): void {
    this._tokenStorage.singOut();
    window.location.reload();
    this.router.navigate(['home']);
  }
}

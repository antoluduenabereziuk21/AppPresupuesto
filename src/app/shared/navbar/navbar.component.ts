import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router) { }

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

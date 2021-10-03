import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Budget} from 'src/app/models/budgetModel';

@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.scss']
})
export class HeadboardComponent implements OnInit {

  entrys:Budget[] = [];
  egress:Budget[] = [];

  constructor( private _userService: UserService) { }

  ngOnInit(): void {
  }

  entryBudget(){
    this._userService.entryProcess().subscribe((data:any) =>{
    console.log(JSON.stringify(data));
    this.egress = data;
  });
}
  egressBudget(){
    this._userService.egressProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.egress = data;
    });
  }
  sumatori(){}
  porcentage(){}
}

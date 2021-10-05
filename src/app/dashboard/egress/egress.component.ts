import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {Budget} from '../../models/budgetModel';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.scss']
})
export class EgressComponent implements OnInit {


  egresses: Budget [] =[];

  deleted:any ={
    id_budget: 'number',
  };

  constructor(
    private _userService: UserService,
    ) { }

  ngOnInit(): void {
    this._userService.egressProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.egresses = data;
    });
  }

}

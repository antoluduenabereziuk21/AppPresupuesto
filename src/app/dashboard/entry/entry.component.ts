import { Component, OnInit } from '@angular/core';
import {Budget} from '../../models/budgetModel';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  entrys: Budget [] =[];

  deleted:any ={
    id_budget: 'number',
  };

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this._userService.entryProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.entrys = data;
    });
  }

}

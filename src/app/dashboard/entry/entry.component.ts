import { Component, OnInit } from '@angular/core';
import {Budget} from '../../models/budgetModel';
import { UserService } from 'src/app/shared/services/user.service';




@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  entrys: Budget [] =[];



  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this._userService.entryProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.entrys = data;
    });
  }

  deleted(id_budget:number){
    this._userService.deletedProcess(id_budget).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
    });
    this.ngOnInit();
  }

}

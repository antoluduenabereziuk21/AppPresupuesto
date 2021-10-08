import { Component, OnInit , Output,EventEmitter } from '@angular/core';
import {Budget} from '../../models/budgetModel';
import { UserService } from 'src/app/shared/services/user.service';
import { InteractionsService } from 'src/app/shared/services/interactions.service';




@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  entrys: Budget [] =[];


  constructor(
    private _userService: UserService,
    private _interactionService: InteractionsService,
  ) { }

  ngOnInit(): void {
    this.entry();
    this.dateEmiter();
  }
  //this method call to service for get to process of entry

  entry():void{
    this._userService.entryProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.entrys = data;
    });
  }
  //this method call to service for delete process of budget and emit to heardboard changes

  deleted(id_budget:number){
    this._userService.deletedProcess(id_budget).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
      this.dateEmiterDelet();
      this.entry();
    });
  }
  //this dateEmiter received the event send to el service and recall the service

  dateEmiter(){
    this._interactionService.updateBudgetObservable$.subscribe(()=> {
      // alert ('component2 method called');
      this.entry();
    });
  }
  //this method emit el event delete

  dateEmiterDelet(){
    this._interactionService.updateBudget();
  }


}

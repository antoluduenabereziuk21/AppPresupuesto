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
  isLoggedIn=false;
  update: boolean = true;




  constructor(
    private _userService: UserService,
    private _interactionService: InteractionsService,
  ) { }

  ngOnInit(): void {
    // this._userService.entryProcess().subscribe((data:any) =>{
    //   console.log(JSON.stringify(data));
    //   this.entrys = data;
    // });
    this.entry();
    // this.dateEmiter();
  }

  entry():void{
    this._userService.entryProcess().subscribe((data:any) =>{
      // console.log(JSON.stringify(data));
      this.entrys = data;
    });
  }

  deleted(id_budget:number){
    this._userService.deletedProcess(id_budget).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
      this.entry();
    });

  }

  // dateEmiter(){
  //   this._interactionService.updateBudgetObservable.subscribe(update=>{
  //     this.update= update;
  //     console.log("Estoy recibiendo el evento")
  //   });
  //   this.entry();
  // }



}

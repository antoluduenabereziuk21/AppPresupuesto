import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InteractionsService } from 'src/app/shared/services/interactions.service';
import { UserService } from 'src/app/shared/services/user.service';
import {Budget} from '../../models/budgetModel';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.scss']
})
export class EgressComponent implements OnInit {

  egresses: Budget [] =[];
  update: boolean = true;


  constructor(
    private _userService: UserService,
    private _interactionService: InteractionsService
    ) { }

  ngOnInit(): void {
    this.egress();
    // this.dateEmiter();
  }

  egress(){
    this._userService.egressProcess().subscribe((data:any) =>{
      // console.log(JSON.stringify(data));
      this.egresses = data;
    });
  }

  deleted(id_budget:number){
    this._userService.deletedProcess(id_budget).subscribe(data =>{
      // console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
      this.egress();
    });
  }

  // dateEmiter(){
  //   this._interactionService.updateBudgetObservable.subscribe(update=>{
  //     this.update= update;
  //   });
  //   this.egress();
  // }

}

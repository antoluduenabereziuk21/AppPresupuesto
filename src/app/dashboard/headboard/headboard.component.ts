import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {Budget} from 'src/app/models/budgetModel';
import { InteractionsService } from 'src/app/shared/services/interactions.service';
@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.scss']
})
export class HeadboardComponent implements OnInit {

  entrys:Budget[] = [];
  egresses:Budget[] = [];
  update!: boolean ;

  constructor( private _userService: UserService,
               private _interactionService: InteractionsService
              ) { }

  ngOnInit(): void {

    // this._interactionService.updateBudgetObservable$.subscribe(()=> alert ('component2 method called'));
    this.dateEmiter();
    this.entryBudget();
    this.egressBudget();
    this.sumatoryEntries();
    this.sumatoryEgress();
    this.percentageEgress();
    this.totalBudget();

  }
  entryBudget(){
    this._userService.entryProcess().subscribe((data:any) =>{
    // console.log(JSON.stringify(data));
    this.entrys= data;
  });
  }
  egressBudget(){
    this._userService.egressProcess().subscribe((data:any) =>{
      // console.log(JSON.stringify(data));
      this.egresses = data;
    });
  }

  sumatoryEntries(){
    let totalEntries:number =0;
    this.entrys.forEach(entry=>{
      totalEntries += JSON.parse(entry.amount);
    });
    // for (let entry of this.entrys){
    //   totalEntries+= JSON.parse(entry.amount);
    // }
    // console.log("estoy imprimiendo las entras:"+totalEntries);
    return totalEntries;
  }
  sumatoryEgress(){
    let totalEgress:number =0;
    this.egresses.forEach(egress=>{
      totalEgress+= JSON.parse(egress.amount);
    });
    // for (let egress of this.egresses){
    //   totalEgress+= JSON.parse(egress.amount);
    // }
    // console.log("estoy imprimiendo las salidas:"+totalEgress);
    return totalEgress;
  }
  percentageEgress(){
    const percentage= this.sumatoryEgress()/this.sumatoryEntries();
    // console.log("estoy imprimiendo el porcentaje:"+percentage);
    return percentage;
  }
  totalBudget(){
    const total= this.sumatoryEntries()-this.sumatoryEgress();
    return total;
  }

  dateEmiter(){
    this._interactionService.updateBudgetObservable$.subscribe(()=> {
      // alert ('component1 method called');
      this.entryBudget();
      this.egressBudget();
    });
  };
}



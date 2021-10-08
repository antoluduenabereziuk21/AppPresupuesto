import { Component, OnInit } from '@angular/core';
import { InteractionsService } from 'src/app/shared/services/interactions.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Budget } from '../../models/budgetModel';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.scss'],
})
export class EgressComponent implements OnInit {
  egresses: Budget[] = [];

  constructor(
    private _userService: UserService,
    private _interactionService: InteractionsService
  ) {}

  ngOnInit(): void {
    this.egress();
    this.dateEmiter();
  }
  //this method call to service for get to process of egresses
  egress() {
    this._userService.egressProcess().subscribe((data: any) => {
      // console.log(JSON.stringify(data));
      this.egresses = data;
    });
  }

  //this method call to service for delete process of budget and emit to heardboard changes
  deleted(id_budget: number) {
    this._userService.deletedProcess(id_budget).subscribe((data) => {
      // console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
      this.dateEmiterDelet();
      this.egress();
    });
  }
  //this dateEmiter received the event send to el service and recall the service
  dateEmiter() {
    this._interactionService.updateBudgetObservable$.subscribe(() => {
      // alert ('component3 method called');
      this.egress();
    });
  }
  //this method emit el event delete
  dateEmiterDelet() {
    this._interactionService.updateBudget();
  }
}

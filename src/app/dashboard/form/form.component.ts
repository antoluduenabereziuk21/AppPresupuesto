import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Budget } from 'src/app/models/budgetModel';
import { InteractionsService } from 'src/app/shared/services/interactions.service';

//interface for label select
interface Concept {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  concepts: Concept[] = [
    { value: '1', viewValue: 'Ingreso' },
    { value: '2', viewValue: 'Egreso' },
  ];

  register: FormGroup;
  errorMessage = '';
  update: boolean = true;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _tokenStorage: TokenStorageService,
    private _interactionService: InteractionsService
  ) {
    this.register = this.fb.group({
      concept: ['', Validators.required],
      amount: ['', Validators.required],
      budget_type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._tokenStorage.userId();
  }

  newConcept(): void {
    const budgetUser: Budget = {
      id_budget: 0,
      concept: this.register.value.concept,
      amount: this.register.value.amount,
      budget_type: this.register.value.budget_type,
      user_budget: this._tokenStorage.userId(),
    };

    // console.log('golllllll' + budgetUser.budget_type + '');
    //this _userSevice send new process of budget to server
    this._userService.newConcept(budgetUser).subscribe(
      (data) => {
        // console.log(data);
        // console.log('se lo pasa al servico');
        this.dateEmiter();
      },
      (err) => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
    );
  }
  // Emiter event for components headboard,entry and egress
  dateEmiter() {
    this._interactionService.updateBudget();
  }
}

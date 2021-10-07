import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Budget } from 'src/app/models/budgetModel'
import { InteractionsService } from 'src/app/shared/services/interactions.service';
interface Concept{
  value: string;
  viewValue:string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  concepts: Concept []= [
    {value:'0',viewValue:'Ingreso'},
    {value:'1',viewValue:'Egreso'}
  ]

  register: FormGroup;
  loading= false;
  errorMessage = '';
  update: boolean = true;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _tokenStorage: TokenStorageService,
    private _interactionService: InteractionsService,
  ) {
    this.register = this.fb.group({
      concept:['', Validators.required,],
      amount:['', Validators.required],
      budget_type:['', Validators.required,],
    })
   }

  ngOnInit(): void {
    this._tokenStorage.userId();
    // this.dateEmiter();
  }

  newConcept():void{

    const budgetUser :Budget = {
      id_budget:0,
      concept: this.register.value.concept,
      amount: this.register.value.amount,
      budget_type: this.register.value.budget_type,
      user_budget: this._tokenStorage.userId(),
    };
    this._interactionService.updateBudgetObservable.subscribe(update=>{
      this.update= update;
      console.log("Evento");
    });
    console.log("golllllll" + budgetUser.budget_type + "");
    this._userService.newConcept(budgetUser).subscribe((data) => {
        // console.log(data);
        console.log("se lo pasa al servico");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
      );


  }

  // dateEmiter(){
  //   this._interactionService.updateBudgetObservable.subscribe(update=>{
  //     this.update= update;
  //     console.log("Evento");
  //   });
  // }
}

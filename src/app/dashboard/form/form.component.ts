import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import {Router} from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Budget } from 'src/app/models/budgetModel'
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

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private _tokenStorage: TokenStorageService,
  ) {
    this.register = this.fb.group({
      concept:['', Validators.required,],
      amount:['', Validators.required],
      budget_type:['', Validators.required,],
    })
   }

  ngOnInit(): void {
    this._tokenStorage.userId();

  }

  newConcept():void{
    const concept =this.register.value.concept;
    console.log(concept);

    const budgetUser :Budget = {
      concept: this.register.value.concept,
      amount: this.register.value.amount,
      budget_type: this.register.value.budget_type,
      user_budget: this._tokenStorage.userId(),
    };

    console.log("golllllll" + budgetUser.budget_type + "");
    this._userService.newConcept(budgetUser).subscribe((data) => {
        console.log(data);
        console.log("se lo pasa al servico");
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
      }
      );
      this.ngOnInit();
  }

}

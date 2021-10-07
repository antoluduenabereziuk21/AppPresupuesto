import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {


  private updatedBudgetSubject = new Subject<boolean>();
  updateBudgetObservable$ = this.updatedBudgetSubject.asObservable();

  updateBudget() {
    this.updatedBudgetSubject.next();
  }

}

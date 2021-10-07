import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  update!:boolean;

  private updatedBudgetSubject = new Subject<boolean>();
  updateBudgetObservable = this.updatedBudgetSubject.asObservable();

  updateBudget(update:boolean) {
    this.update = update;
    this.updatedBudgetSubject.next(update);
  }

}

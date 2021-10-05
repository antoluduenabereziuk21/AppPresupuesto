import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../../models/budgetModel';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api/v1/';
  private ID = this._tokenStorage.userId();
  ;

  constructor(
    private http: HttpClient,
    private _tokenStorage: TokenStorageService,
  ) { }

  entryProcess(){
    console.log("estoy enviando este dato ala base datos:"+JSON.parse(this.ID)+"mas el budget_type:0");
    return this.http.get(`${this.URL}users/entry?user_budget=${this.ID}`);
  };

  egressProcess(){
    console.log("estoy enviando este dato ala base datos:"+JSON.parse(this.ID)+"mas el budget_type:1");
    return this.http.get(`${this.URL}users/egress?user_budget=${this.ID}`);
  }
  newConcept(budget: Budget){
    return this.http.post(`${this.URL}users/newprocess`,budget);
  }

  deletedProcess(id: number,data:any) {
    return this.http.put(`${this.URL}users/deleted${id}`,data);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {Budget} from '../../models/budgetModel';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.scss']
})
export class EgressComponent implements OnInit {


  egresses: Budget [] =[];



  constructor(
    private _userService: UserService,
    ) { }

  ngOnInit(): void {
    this._userService.egressProcess().subscribe((data:any) =>{
      console.log(JSON.stringify(data));
      this.egresses = data;
    });
  }

  deleted(id_budget:number){
    this._userService.deletedProcess(id_budget).subscribe(data =>{
      console.log("Estoy eliminando el mensaje de recibidos"+JSON.stringify(data));
    });
    this.ngOnInit();
  }

}

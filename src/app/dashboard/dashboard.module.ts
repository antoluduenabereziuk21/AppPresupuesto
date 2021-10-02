import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { EgressComponent } from './egress/egress.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeadboardComponent } from './headboard/headboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EntryComponent,
    EgressComponent,
    HeadboardComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

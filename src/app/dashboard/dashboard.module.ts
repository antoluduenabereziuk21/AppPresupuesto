import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { EgressComponent } from './egress/egress.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeadboardComponent } from './headboard/headboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EntryComponent,
    EgressComponent,
    HeadboardComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

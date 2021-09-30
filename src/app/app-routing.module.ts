import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signin', component: SigninComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard',
  loadChildren:()=>import('src/app/dashboard/dashboard.module').
  then(x=>x.DashboardModule)},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

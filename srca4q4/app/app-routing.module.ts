import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProgramminglanguagesComponent} from './programminglanguages/programminglanguages.component';
import{OperatingsystemComponent} from './operatingsystem/operatingsystem.component';
import{DatabasesComponent} from './databases/databases.component';
const routes: Routes = [
  {path:'operatingsystem',component:OperatingsystemComponent},
  {path:'programminglanguages',component:ProgramminglanguagesComponent},
  {path:'databases',component:DatabasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

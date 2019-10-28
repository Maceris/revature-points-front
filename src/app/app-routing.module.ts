import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AdjustmentsComponent } from './Components/adjustments/adjustments.component';
import { StoreComponent } from './Components/store/store.component';


const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "adjustments", component:AdjustmentsComponent},
  {path: "store", component:StoreComponent},
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

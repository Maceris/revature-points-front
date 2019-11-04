import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AdjustmentsComponent } from './Components/adjustments/adjustments.component';
import { StoreComponent } from './Components/store/store.component';
import { TrainerCanActivateGuard } from './Guards/trainer-can-activate.guard';
import { AssociateCanActivateGuard } from './Guards/associate-can-activate.guard';
import { PurchasesComponent } from './Components/purchases/purchases.component'

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent, canActivate: [AssociateCanActivateGuard]},
  {path: "adjustments", component:AdjustmentsComponent, canActivate: [TrainerCanActivateGuard]},
  {path: "store", component:StoreComponent, canActivate: [AssociateCanActivateGuard]},
  {path: "purchases", component:PurchasesComponent, canActivate: [AssociateCanActivateGuard]},
  {path: "**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

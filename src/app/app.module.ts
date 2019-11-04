import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Components/login/login.component';

import { NavbarComponent } from './Components/navbar/navbar.component';

import { StoreComponent } from './Components/store/store.component';
import { RewardComponent } from './Components/store/reward/reward.component';
import { RewardFormComponent } from './Components/store/reward-form/reward-form.component';

import { AdjustmentsComponent } from './Components/adjustments/adjustments.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { TrainerCanActivateGuard } from './Guards/trainer-can-activate.guard';
import { AssociateCanActivateGuard } from './Guards/associate-can-activate.guard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PurchasesComponent } from './Components/purchases/purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    StoreComponent,
    RewardComponent,
    AdjustmentsComponent,
    DashboardComponent,
    RewardFormComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TrainerCanActivateGuard,AssociateCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

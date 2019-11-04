import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../../../Models/Reward';
import { RewardService } from '../Services/reward.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreComponent } from '../store.component';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.css']
})
export class RewardFormComponent implements OnInit {
  hide = true;
  button:string;
  reward:Reward;
  rewardId:number;
  showName = true;
  name:string;
  showPrice = true;
  price:number;
  showStock = true;
  stock:number;
  
  constructor(private rs:RewardService) {}

  ngOnInit() {
    this.rs.formSubject.subscribe(
      ({formType,formContent}) => {
        this.button = formType;
        this.rewardId = formContent.rewardId;
        this.name = formContent.name;
        this.price = formContent.price;
        this.stock = formContent.stock;
        if (formType==='update'){
        this.showName = false;
        this.showPrice = false;
        this.showStock = false;
        }
      });
    this.rs.table.subscribe((hide:boolean) => {
      this.hide = hide;
    })
  }
  updateName(){
    this.showName = true;
  }
  updatePrice(){
    this.showPrice = true;
  }
  updateStock(){
    this.showStock = true;
  }
  submit(){
    if(this.button==='update'){
      this.showName = true;
      this.showPrice = true;
      this.showStock = true;
    }
    this.rs.postReward(
      this.button,
      this.rewardId,
      this.name,
      this.price,
      this.stock).subscribe((resp) => {
          
        });
    this.rs.table.next(true);
  }

}

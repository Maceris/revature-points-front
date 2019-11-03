import { Component, OnInit } from '@angular/core';
import { Reward } from '../../../Models/Reward';
import { RewardService } from '../Services/reward.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.css']
})
export class RewardFormComponent implements OnInit {
  button:string;
  reward:Reward;
  r_id:number;
  showName = true;
  name:string;
  showPrice = true;
  price:number;
  showStock = true;
  stock:number;
  
  constructor(private rs:RewardService) {
    this.rs.formSubject.subscribe(
      ({formType,formContent}) => {
        console.log(formType,formContent);
        this.button = formType;
        this.r_id = formContent.r_id;
        this.name = formContent.name;
        this.price = formContent.price;
        this.stock = formContent.stock;
        this.showName = false;
        this.showPrice = false;
        this.showStock = false;
        console.log(this.button, this.r_id, this.name, this.price, this.stock);
      });
    }

  ngOnInit() {
    
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
    console.log(this.button,this.r_id,this.name,this.price,this.stock);
    this.rs.postReward(
      this.button,
      this.r_id,
      this.name,
      this.price,
      this.stock).subscribe((resp) => {
          console.log(resp);
        });
    this.rs.table.next(true);
  }

}

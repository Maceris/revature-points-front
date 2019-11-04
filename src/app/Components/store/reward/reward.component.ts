import { Component, OnInit, Input } from '@angular/core';
import { Reward } from 'src/app/Models/reward';
import { RewardService } from '../Services/reward.service';
import { Associate } from 'src/app/Models/associate';
import { AuthService } from 'src/app/Services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {
  
  @Input() reward: Reward = new Reward(0, "", 0, 0);
  @Input() trainer: boolean = false;
  associate : Associate;

  isPurchaseable : boolean;

  bgColor = 'white';
  constructor(private rs:RewardService,
    private user: AuthService) { }

  ngOnInit() {
    if (!this.user.isTrainer()) {
      this.rs.getAssociate().subscribe((resp:Associate)=>{
        this.associate = resp;
        this.isPurchaseable = (this.associate.balance >= this.reward.price) && (this.reward.stock > 0);
      });
    }
  }


  buyReward() {
    if (!this.user.isTrainer()) {
      if (this.associate.balance < this.reward.price) {
        alert("Can't afford that, please try another.");
        return;
      }
      if (this.reward.stock <= 0){
        alert("No items left to buy.");
        return;
      }
    }
    this.rs.postPurchase(this.reward.rewardId).subscribe(
      (response:any) => {
        if (response.error) {
          alert('transaction failed');
        } else {
          this.bgColor = "grey";
        }
      });
      this.reward.stock -= 1;
  }
  editReward() {
    this.rs.formSubject.next({
        formType:'update',
        formContent:this.reward
      });
    this.rs.table.next(false);
  }
  deleteReward() {
    this.rs.deleteReward(this.reward.rewardId).subscribe(
      (response:any) => {
        console.log(response);
        if (response.error) {
          alert('transaction failed');
        } else {
          this.bgColor = "grey";
        }
      });
  }

}

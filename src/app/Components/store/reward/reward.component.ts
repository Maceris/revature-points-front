import { Component, OnInit, Input } from '@angular/core';
import { Reward } from 'src/app/Models/reward';
import { RewardService } from '../Services/reward.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {
  
  @Input() reward: Reward = new Reward(0, "", 0, 0);
  @Input() trainer: boolean = false;
  bgColor = 'white';
  constructor(private rs:RewardService) { }

  ngOnInit() {
  }

  buyReward() {
    this.rs.postPurchase(this.reward.r_id).subscribe(
      (response:any) => {
        console.log(response);
        if (response.error) {
          alert('transaction failed');
        } else {
          this.bgColor = "grey";
        }
      });
  }
  editReward() {
    this.rs.formSubject.next({
        formType:'update',
        formContent:this.reward
      });
    this.rs.table.next(false);
  }
  deleteReward() {}

}

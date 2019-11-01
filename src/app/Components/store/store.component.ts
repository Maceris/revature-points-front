import { Component, OnInit } from '@angular/core';
import { Reward } from 'src/app/Models/reward';
import { RewardService } from './Services/reward.service';
import { AuthService } from '../../Services/auth.service';
              

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  page = 0;
  rewards:any = [];
  // page 
  constructor(private rewardService:RewardService,
              private auth:AuthService) { }

  ngOnInit() {
    this.rewardService.getRewards().subscribe(
      (response:any) => {
        this.rewards = response.reduce((acc,el)=>{
          const last = acc.length-1;
          if (acc[last].length===15){
            acc.push([el]);
          } else {
            acc[last].push(el);
          }
          return acc;
        },[[]]);
      });
  }
  pageChange(i):void{
    this.page += i;
  }

  create() {}


  

}

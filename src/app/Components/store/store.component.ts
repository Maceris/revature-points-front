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
  table = true;
  rewards:Array<Array<Reward>> = [];
  showResults:boolean = true;
  trainer:boolean = true;
  constructor(private rs:RewardService,
              private auth:AuthService) { }
  ngOnInit(){
    this.rs.getRewards().subscribe(
      (response:any) => {
        this.rewards = response.reduce((acc,el)=>{
          const last = acc.length - 1;
          if (acc[last].length===15){
            acc.push([el]);
          } else {
            acc[last].push(el);
          }
          return acc;
        },[[]]);
      });
    this.rs.table.subscribe((table:boolean) => {
      this.table = table;
    })
    this.rs.formSubmit.subscribe(({deletion,update,reward}) => {
      if (deletion) {
        this.rewards[this.page] = this.rewards[this.page].filter((el)=> {
          return el.rewardId !== reward.rewardId;
        });
      } else if (update) {
        let limit = this.rewards[this.page].length;
        for (var i = 0; i < limit; i++){
          if (this.rewards[this.page][i].rewardId===reward.rewardId){
            this.rewards[this.page][i] = reward;
            break;
          }
        }
      } else {
        if (this.rewards[this.rewards.length-1].length<15){
          this.rewards[this.rewards.length-1].push(reward);
        } else {
          this.rewards.push([reward]);
        }
      }
    })
    this.trainer = this.auth.isTrainer();
  }
  pageChange(i):void{
    this.page += i;
  }
  create():void{
    this.rs.formSubject.next({formType: 'add', formContent: new Reward(0, '', 0, 0)});
    this.rs.table.next(false);
  }
}

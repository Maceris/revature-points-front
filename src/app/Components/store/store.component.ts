import { Component, OnInit } from '@angular/core';
import { Reward } from 'src/app/Models/reward';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  rewards:Array<Reward> = [
    new Reward(1, "Example 1", 100, 10),
    new Reward(2, "Example 2", 1206, 4),
    new Reward(3, "Adams favorite tie", 100000, 1),
    new Reward(3, "A new car", 75, 2),
    new Reward(3, "Arby's", 2, 56)
  ];

  constructor() { }

  ngOnInit() {
  }


  

}

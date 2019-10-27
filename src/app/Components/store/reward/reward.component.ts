import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  @Input() name: string = "Item";

  constructor() { }

  ngOnInit() {
  }

}

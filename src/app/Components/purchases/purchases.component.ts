import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './Services/purchase.service';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases:Array<any> = [];
  constructor(private ps:PurchaseService) { }

  ngOnInit() {
    this.ps.getAllMyPurchases().subscribe((resp)=>{
      resp.forEach((purchase)=>{
        this.ps.getReward(purchase.rewardId).subscribe((reward)=>{
          console.log("<", purchase, "-", reward, ">");
          this.purchases.push({time: new Date(purchase.time).toString(), name: reward.name, price: reward.price});
        })
        });
    });
  }

}

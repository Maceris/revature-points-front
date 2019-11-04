import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Reward } from '../../../Models/reward';
import { AuthService } from '../../../Services/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  headers = {
    headers: new HttpHeaders({
              'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
              'Access-Control-Allow-Headers': '*',
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              //'Authorization': 'my-auth-token'
            })
  }
  formSubject = new Subject();
  table = new Subject();
  formSubmit = new Subject();
  
  constructor(private http:HttpClient,
              private auth:AuthService,
              private user: AuthService) { }

  getAssociate() {
    return this.http.get(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/associates/'+this.user.id,
      this.headers)
  }
  getRewards(){
    return this.http.get(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards',
      this.headers)
  }
  postPurchase(rewardId){
    return this.http.post(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/purchases',
      {purchaseId:0, associateId:this.auth.id, time:new Date().getTime(), rewardId:rewardId},
      this.headers
    )
  }
//  post & put in same function
  postReward(method,rewardId,name,price,stock){
    if (method==='add'){
      return this.http.post(
        'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards',
        {rewardId:rewardId,name:name,price:price,stock:stock});
    } else {
      return this.http.put(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards/'+rewardId,
      {rewardId:rewardId,name:name,price:price,stock:stock},
      this.headers);
    }
  }
  deleteReward(rewardId){
    return this.http.delete(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards/'+rewardId,
      this.headers)
  }
}

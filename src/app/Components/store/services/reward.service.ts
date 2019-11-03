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
  
  constructor(private http:HttpClient,
              private auth:AuthService) { }
  getRewards(){
    return this.http.get(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards',
      this.headers)
  }
  postPurchase(r_id){
    return this.http.post(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/purchases',
      {p_id:0, a_id:this.auth.id, p_time:new Date(), r_id:r_id},
      this.headers
    )
  }
//  post & put in same function
  postReward(method,r_id,name,price,stock){
    if (method==='add'){
      return this.http.post(
        'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards',
        {r_id:r_id,name:name,price:price,stock:stock});
    } else {
      return this.http.put(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards/'+r_id,
      {r_id:r_id,name:name,price:price,stock:stock},
      this.headers);
    }
  }
  deleteReward(r_id){
    return this.http.delete(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/purchases',
      this.headers)
  }
}

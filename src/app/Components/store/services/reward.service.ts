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
      'http://localhost:8080/rewards',
      this.headers)
  }
  postPurchase(r_id){
    return this.http.post(
      'http://localhost:8080/purchases',
      {p_id:0, a_id:this.auth.id, p_time:(new Date()).getTime(), r_id:r_id},
      this.headers
    )
  }
  postReward(method,r_id,name,price,stock){
    if (method==='post'){
      return this.http.post(
      'http://localhost:8080/rewards',
      {r_id:r_id,name:name,price:price,stock:stock});
    } else {
      return this.http.put(
      'http://localhost:8080/rewards',
      {r_id:r_id,name:name,price:price,stock:stock});
    }
  }
}

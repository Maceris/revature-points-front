import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Reward } from '../../../Models/reward';
import { AuthService } from '../../../Services/auth.service';

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
      {p_id:0, a_id:this.auth.id, p_time:new Date(), r_id:r_id},
      this.headers
    )
  }
}

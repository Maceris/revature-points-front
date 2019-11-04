import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient,
              private user: AuthService) { }
  headers = { headers: new HttpHeaders({
          'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Content-Type':  'application/json',
          'Accept': 'application/json'
          //'Authorization': 'my-auth-token'
        })
      }
  getAllMyPurchases(){
    return this.http.get<any>(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/purchases?a_id='+this.user.id,
      this.headers);
  }
  getReward(id){
    return this.http.get<any>(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/rewards/'+id,
      this.headers);
  }
}

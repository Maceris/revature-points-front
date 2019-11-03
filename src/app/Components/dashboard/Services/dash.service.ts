import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Associate } from 'src/app/Models/associate';
import { Trainer } from 'src/app/Models/trainer';

@Injectable({
  providedIn: 'root'
})
export class DashService {

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
    getUser() {
      return this.http.get<Associate>(
      'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/associates/'+this.user.id,
      this.headers);
    }
    getTrainer() {
      return this.http.get<Trainer>(
        'http://ec2-52-14-160-173.us-east-2.compute.amazonaws.com:8081/trainers/'+this.user.id,
        this.headers);
    }
}

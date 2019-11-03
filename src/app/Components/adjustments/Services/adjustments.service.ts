import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Associate } from '../../../Models/associate';
import { AuthService } from '../../../Services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdjustmentsService {

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
  getAllMyStudents(){
    console.log(this.user);
    return this.http.get<any>(
      'http://localhost:8080/associates?t_id='+this.user.id,
      this.headers);
  }
  
  adjustPoints(associate){
    return this.http.put<any>(
      'http://localhost:8080/associates/'+associate.a_id,
      associate,
      this.headers);
  }
} 

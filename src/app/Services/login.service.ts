import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from '../Models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  //  httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  loginAssociate(level:string,user:Login){
    return this.http.post<any>(
      `http://localhost:8080/${level}s/login`,
      user,
      // httpOptions =
      { headers: new HttpHeaders({
          'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Content-Type':  'application/json',
          'Accept': 'application/json'
          //'Authorization': 'my-auth-token'
        })
      });
  }
}

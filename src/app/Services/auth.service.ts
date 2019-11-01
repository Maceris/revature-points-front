import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubject = new Subject();
  authenticated = false;
  trainer = false;
  id:number;
  constructor() {
    this.userSubject.subscribe(
      ({position,id}) => {
        switch(position) {
          case 'associate':
            this.authenticated = true;
            this.trainer = false;
            this.id = id;
            break;
          case 'trainer':
            this.authenticated = true;
            this.trainer = true;
            this.id = id;
            break;
          default:
            this.authenticated = false;
            this.trainer = false;
            break;
        }
    });
  }
  
  isAuthenticated():boolean{
    return this.authenticated;
  }
  isTrainer():boolean{
    return this.trainer;
  }
}

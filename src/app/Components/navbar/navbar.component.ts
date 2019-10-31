import { Component, OnInit } from '@angular/core';
import { StateService } from '../../Services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private stateService: StateService) { }
  loggedIn: boolean;
  trainer: boolean;
  
  ngOnInit() {
    this.loggedIn = false;
    this.trainer = false;
    this.stateService.userSubject.subscribe(
      (position) => {
        switch(position) {
          case 'associate':
            this.loggedIn = true;
            this.trainer = false;
            break;
          case 'trainer':
            this.loggedIn = true;
            this.trainer = true;
            break;
          default:
            this.loggedIn = false;
            this.trainer = false;
            break;
        }
    });
  }
  
  logout():void{
    this.loggedIn = false;
    this.trainer = false;
  }

}

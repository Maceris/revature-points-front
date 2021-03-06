import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private user: AuthService) { }
  
  ngOnInit() {
  }
  
  logout():void{
    this.user.userSubject.next('');
  }

}

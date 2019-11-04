import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Associate } from 'src/app/Models/associate';
import { DashService } from './Services/dash.service';
import { Trainer } from 'src/app/Models/trainer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private user: AuthService, private ds:DashService) { }

  associate:Associate;
  trainer:Trainer;

  ngOnInit() {
    if (this.user.isTrainer()){
      this.ds.getTrainer().subscribe((resp)=>{
        this.trainer = resp;
      })
    } else {
      this.ds.getUser().subscribe((resp)=>{
        this.associate = resp;
        // so the console shuts up about undefined variables
        this.ds.getTrainerById(resp.trainerId).subscribe((resp)=>{
          this.trainer = resp;
        });
      });
      
    }
    
  }

}

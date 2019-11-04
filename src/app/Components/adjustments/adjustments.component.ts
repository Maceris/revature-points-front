import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder} from '@angular/forms';
import { AdjustmentsService } from './Services/adjustments.service';
import { Associate } from '../../Models/associate';
import { Trainer } from '../../Models/trainer';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.css']
})
export class AdjustmentsComponent implements OnInit {

  public adjustForm: FormGroup;
  currAssoc:Associate;
  curPoints: number = 0;

  associates: Array<Associate> = [];

  constructor(private formBuilder: FormBuilder,
              private as:AdjustmentsService,
              private user: AuthService) { }

  ngOnInit() {
    this.as.getAllMyStudents().subscribe((resp)=>{
      if (!resp.error){
        resp.forEach((student)=>{
          this.associates.push(new Associate(student.associateId, student.username, student.password, student.balance, student.fname, student.lname, this.user.id))
        })
      }
    })
    this.adjustForm = new FormGroup({adjustment:new FormControl(0)});
    if (this.associates.length > 0) {
      this.curPoints = this.associates[0].balance;
      this.currAssoc =  this.associates[0]
    }
  }

  selectChangeHandler(event) {
    const selected_id:number = event.target.value;
    for (let i = 0 ; i < this.associates.length; i++) {
      if (this.associates[i].associateId == selected_id) {
        this.currAssoc = this.associates[i];
        this.curPoints = this.associates[i].balance;
        break;
      }
    }
  }
  
  adjust(){
    console.log('...')
    console.log(this.adjustForm.get('adjustment').value);
    console.log(this.currAssoc);
    this.currAssoc.balance += this.adjustForm.get('adjustment').value;
    this.as.adjustPoints(this.currAssoc).subscribe((resp)=>{
      console.log(resp);
    });
    this.adjustForm.reset();
    this.curPoints = this.currAssoc.balance;
  }

}

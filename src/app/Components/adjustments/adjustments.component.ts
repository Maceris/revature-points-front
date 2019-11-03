import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder} from '@angular/forms';
import { AdjustmentsService } from './Services/adjustments.service';
import { Associate } from '../../Models/associate';
import { Trainer } from '../../Models/trainer';

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.css']
})
export class AdjustmentsComponent implements OnInit {

  public adjustForm: FormGroup;
  currAssoc:Associate;
  curPoints: number = 0;

  private testTrainer: Trainer = new Trainer(1, "t-Rainer", "adam", "Adam", "Raneri");
  associates: Array<Associate> = [];

  constructor(private formBuilder: FormBuilder,
              private as:AdjustmentsService) { }

  ngOnInit() {
    this.as.getAllMyStudents().subscribe((resp)=>{
      if (!resp.error){
        resp.forEach((student)=>{
          this.associates.push(new Associate(student.a_id, student.username, '', student.balance, student.f_name, student.l_name, null))
        })
      }
    })
    this.adjustForm = new FormGroup({adjustment:new FormControl(0)});
    if (this.associates.length > 0) {
      this.curPoints = this.associates[0].balance;
    }
  }

  selectChangeHandler(event) {
    const selected_id:number = event.target.value;
    for (let i = 0 ; i < this.associates.length; i++) {
      if (this.associates[i].a_id == selected_id) {
        this.currAssoc = this.associates[i];
        this.curPoints = this.associates[i].balance;
        break;
      }
    }
  }
  
  adjust(){
    this.currAssoc.balance += this.adjustForm.value.adjustment;
    this.as.adjustPoints(this.currAssoc)
  }

}

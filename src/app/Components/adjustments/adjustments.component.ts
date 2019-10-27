import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Associate } from 'src/app/Models/associate';
import { Trainer } from 'src/app/Models/trainer';

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.css']
})
export class AdjustmentsComponent implements OnInit {

  public adjustForm: FormGroup;

  curPoints: number = 0;

  private testTrainer: Trainer = new Trainer(1, "t-Rainer", "adam", "Adam", "Raneri");
  associates: Array<Associate> = [
    new Associate(1, "user1", "password", 100, "John", "Doe", this.testTrainer),
    new Associate(2, "user2", "password", 10000, "Kevin", "Smith", this.testTrainer),
    new Associate(3, "user3", "password", 70, "Mike", "Hammer", this.testTrainer),
    new Associate(4, "user4", "password", 2, "Brian", "Serrano", this.testTrainer),
    new Associate(5, "user5", "password", 50002, "Alan", "Turing", this.testTrainer),
    new Associate(6, "user6", "password", 12345, "Joe", "Blow", this.testTrainer)
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.adjustForm = this.formBuilder.group({});
    if (this.associates.length > 0) {
      this.curPoints = this.associates[0].balance;
    }
  }

  selectChangeHandler(event) {
    const selected_id:number = event.target.value;
    for (let i = 0 ; i < this.associates.length; i++) {
      if (this.associates[i].a_id == selected_id) {
        this.curPoints = this.associates[i].balance;
        break;
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../Models/Login';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public radioGroupForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 'associate'
    });
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15)])),
      'password': new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(6)]))
      // 'password': ['',[Validators.required, Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid){
      // this.loginForm.controls.password.errors.minlength
      alert('error')
    //} else if (this.radioGroupForm.model === 'associate') {
    //  console.log('')
    } else {
      console.log(this.radioGroupForm.model);
    }
    
    //this.loginService.loginAssociate(new Login(this.loginForm.value.username,this.loginForm.value.password))
    //.subscribe((response:any)=>{
    //    console.log(response);
    //  });
  }

}

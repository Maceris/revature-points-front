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
    });
  }

  onSubmit() {
    if (this.loginForm.invalid){
      alert('error');
    } else {
      this.loginService.loginAssociate(
        this.radioGroupForm.value.model,
        new Login(
          this.loginForm.value.username,
          this.loginForm.value.password)
        ).subscribe(
          (response:any) => {
            if (response.error){
              console.log('Error');
            } else {
              navigateByUrl
              console.log(response);
            }
          });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../Models/Login';
import { LoginService } from '../../Services/login.service';
import { AuthService } from '../../Services/auth.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public radioGroupForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private loginService: LoginService,
              private authService:AuthService) { }
  
  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 'associate'
    });
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(200)])),
      'password': new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200),
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
              if (this.radioGroupForm.value.model==='associate'){
                this.authService.userSubject.next({position:this.radioGroupForm.value.model,id:response.associateId});
              } else {
              this.authService.userSubject.next({position:this.radioGroupForm.value.model,id:response.trainerId});
              }
              this.router.navigate(['/dashboard']);
            }
          });
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { LoginDataInterface, LoginAuthInterface } from '../core/interfaces/login';
import { MessageService } from '../Services/message.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService, private router:Router, private msg:MessageService) { }

  public login:LoginDataInterface = {email:'', password:''};
  public verify:LoginAuthInterface = {email:'', password:'', code:null};
  isAuth = false;
  errormsg = '';
  isError= false;
  alert =''
  message = '';
  showPassword = false;

  ngOnInit(): void {
    this.message = this.msg.getMessage();
    if(this.message !== ''){
      this.isError = true;
      this.errormsg = this.message;
      this.alert  = 'alert alert-success'
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert  = ''
      }, 10000);
    }
  }

  formlogin = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    code: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get email() { return this.formlogin.get('email'); }
  get password() { return this.formlogin.get('password'); }
  get code() { return this.formlogin.get('code'); }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  Onsubmit():void{
    if(!this.isAuth){
    this.auth.login(this.login).subscribe(
      res => {
        this.isAuth = true;
        console.log(res);
        this.isError = true;
        this.errormsg = res.msg;
        this.alert  = 'alert alert-success'
        setTimeout(() => {
          this.isError = false;
          this.errormsg = '';
          this.alert  = ''
        }, 10000);
      },
      err => {
        if(err.error === 'La cuenta no ha sido activada o no existe'){
          this.isError = true;
          this.errormsg = err.error;
          this.alert  = 'alert alert-danger'
          setTimeout(() => {
            this.isError = false;
            this.errormsg = '';
            this.alert  = ''
          }, 10000);
        }
        else if(err.status === 401){
          this.isError = true;
          this.errormsg = "Correo o contraseña incorrectos";
          this.alert  = 'alert alert-danger'
          setTimeout(() => {
            this.isError = false;
            this.errormsg = '';
            this.alert  = ''
          }, 10000);
        }
      }
    );
    }
    else{
      this.verify.email = this.login.email;
      this.verify.password = this.login.password;
      this.auth.verify(this.verify).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          this.isError = true;
          this.errormsg = err.error;
          this.alert  = 'alert alert-danger'
          setTimeout(() => {
            this.isError = false;
            this.errormsg = '';
            this.alert  = ''
          }, 10000);
        });
    }
  }
}


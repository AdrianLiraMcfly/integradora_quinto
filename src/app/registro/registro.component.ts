import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';
import { RegisterDataInterface, RegisterResponseInterface } from '../core/interfaces/registrer';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private auth:AuthService, private route:Router) {  }

  public register:RegisterDataInterface = {name:'', email:'', password:'', password_confirmation:''};
  isError=false
  errormsg=''

  formregistro = new FormGroup({
    name: new FormControl('', [Validators.required,  Validators.minLength(3),Validators.maxLength(30)]),
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get name() { return this.formregistro.get('name'); }
  get email() { return this.formregistro.get('email'); }
  get password() { return this.formregistro.get('password'); }
  get password_confirmation() { return this.formregistro.get('password_confirmation'); }

  Onsubmit():void{
    this.auth.register(this.register).subscribe((response)=>{
      console.log(response.msg);
      this.route.navigate(['/login']);
    },(error)=>{
      console.log(error);
      this.isError= true
      this.errormsg=error.error.errors.email
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
      }, 10000);
    });
  }

}

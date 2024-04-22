import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{


  name = ''
  plants = 0
  error =''
  msg=''
  isError = false;
  alert = '';

  profile = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/)])
  });
  get password() { return this.profile.get('password'); }


  constructor(private auth:AuthService,private router:Router, private msgService:MessageService){}

  ngOnInit(): void {

    this.msg = this.msgService.getMessage()
    console.log(this.msg)
    if(this.msg !== '' ){
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.msg = '';
        this.alert = '';
      }, 10000);
    }

      this.auth.me().subscribe((res)=>{
        console.log(res)
        this.name = res.name
        this.plants = res.plant_count
    
      },(err)=>{
        console.log(err)
      
      })
  }

  changepassword(){
    const password = this.profile.get('password')?.value
    this.auth.changepassword({password}).subscribe((Response)=>{
      console.log('Response:', Response); // Añade esta línea para verificar la respuesta del servidor
      console.log(Response)
      this.profile.get('password')?.reset()
      
      this.msgService.setMessage(this.msg)
      console.log(this.msg)
      setTimeout(() => {
        this.msg = ''
      }, 2000);
    },(err)=>{
      console.log(err)
      this.error =err.error.errors.password
      
    })
  }

  get isProfileValid() {
    return this.profile.valid;
  }
}

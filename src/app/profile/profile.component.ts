import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  profile = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9 ]*$/)])
  });
  get password() { return this.profile.get('password'); }


  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(): void {
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
    this.auth.changepassword({password}).subscribe((res)=>{
      console.log('Response:', res); // Añade esta línea para verificar la respuesta del servidor
      console.log(res)
      this.profile.get('password')?.reset()
      this.msg = res.body
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

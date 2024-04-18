import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-navtwo',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './navtwo.component.html',
  styleUrl: './navtwo.component.css'
})
export class NavtwoComponent implements OnInit{
 
  rol_id = 0
  constructor (private auth:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event)=>{
      if(event.constructor.name == 'NavigationEnd'){
        this.getRol()
      }
    })
  }

  async getRol(){
    this.auth.checkRol().subscribe((res)=>{
      console.log(res)
      this.rol_id = res.body
    },(err)=>{
      console.log= err
    })
  }

  logout(){
    this.auth.logout().subscribe((res)=>{
        console.log(res)
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    },(err)=>{
      console.log(err)
    })
  }

}

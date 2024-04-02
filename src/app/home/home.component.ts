import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { tokenResponseInterface } from '../core/interfaces/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private auth:AuthService, private router:Router) { }
  username ='';
  ngOnInit():void{
    this.auth.me().subscribe(
      res => {
        console.log(res);
        this.username = res.name;
        localStorage.setItem('userEmail', res.email);
      },
      err => {
        console.log(err);
      }
    );
  }
}

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Route, Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'integradora';
  isAuth= false;
  constructor(private auth: AuthService, private route:Router) { }
  ngOnInit():void{
    this.auth.me().subscribe(
      res => {
        console.log(res);
        this.isAuth = true;
      },
      err => {
        console.log(err);
        this.isAuth = false;
      }
    );
  }

  logout(){
    this.auth.logout().subscribe(
      res => {
        console.log(res);
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');
        this.isAuth = false;
        this.route.navigate(['/login']);
      },
      err => {
        console.log(err);
      }
    );
  }


}

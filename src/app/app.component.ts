import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Route, Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth.service';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'integradora';
  isAuth= false;
  isLoading = false;



  constructor(private auth: AuthService, private route:Router) { 
    this.route.events.subscribe((event) => 
    {
      if(event.constructor.name === 'NavigationEnd'){
        this.checkauth();
      }
    });
  }

  checkauth(){
    this.auth.isauth().subscribe(
      (res: any) => {
        console.log(res);
        this.isAuth = true;
      },
      (err: any) => {
        console.log(err);
        this.isAuth = false;
      }
    );
  }


  logout(){
    this.auth.logout().subscribe(
      (res: any) => {
        console.log(res);
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');
        this.isAuth = false;
        this.route.navigate(['/login']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


}

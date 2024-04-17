import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit{
  title = 'integradora';
  isAuth= false;
  isLoading = false;
  rol: number = 0;
  status = false;


  constructor(private auth: AuthService, private route:Router) { 
    this.route.events.subscribe((event) => 
    {
      if(event.constructor.name === 'NavigationEnd'){
        this.checkauth();
        this.checkrol();
      }
    });

  }

  ngOnInit(): void {
    this.checkauth();
    this.checkrol();
    this.checkstatus();
    console.log(this.isAuth);
    console.log(this.rol);
    
  }

  checkauth(){
    this.auth.isauth().subscribe(
      (res: any) => {
        console.log(res);
        this.isAuth = true;
        console.log(res.status)
      },
      (err: any) => {
        console.log(err);
        this.isAuth = false;
      }
    );
  }

  checkrol(){
    this.auth.checkRol().subscribe(
      (res: any) => {
        console.log(res);
        this.rol = res.body;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  checkstatus(){
    this.auth.checkActive().subscribe(
      (res: any) => {
        console.log(res);
        this.status = res.body;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  logout(){
    this.auth.logout().subscribe(
      (res: any) => {
        console.log(res);
        localStorage.removeItem('userName');
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

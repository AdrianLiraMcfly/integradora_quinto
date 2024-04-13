import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { tokenResponseInterface } from '../core/interfaces/login';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { PlantData } from '../core/interfaces/plantsData';
import { WebsocketService } from '../Services/websocket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private auth:AuthService, private router:Router, private plantsService:PlantsService, private socket:WebsocketService) { }
  username:any;
  plants:any;

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

    this.plantsService.getPlants().subscribe(
      res => {
        this.plants = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    
  }

  link(){
    this.router.navigate(['/plants']);
  }
}

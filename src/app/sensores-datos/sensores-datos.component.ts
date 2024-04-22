import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../Services/websocket.service';
import { SensorFilter, Daum } from '../core/interfaces/mongosensores';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sensores-datos',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './sensores-datos.component.html',
  styleUrl: './sensores-datos.component.css'
})
export class SensoresDatosComponent {
sensors: SensorFilter={data: []};
msg= '';
p: number = 1;
  constructor(private websocketService: WebsocketService) { 
  }

 ngOnInit() {
    this.websocketService.getAgua().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });


  }

  selectChangeHandler(event: any){
    switch(event.target.value){
      case 'Agua':
        this.getAgua();
        break;
      case 'Humedad':
        this.getHumedad();
        break;
      case 'Luz':
        this.getLuz();
        break;
      case 'Movimiento':
        this.getMovimiento();
        break;
      case 'Temperatura':
        this.getTemperatura();
        break;
      case 'Vibracion':
        this.getVibracion();
        break;
      case 'Lluvia':
        this.getLluvia();
        break;
      case 'Suelo':
        this.getSuelo();
        break;
    }
  }

  getAgua(){
    this.msg= 'Agua';
    this.sensors.data = [];
    this.websocketService.getAgua().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getHumedad(){
    this.msg= 'Humedad';
    this.sensors.data = [];
    this.websocketService.getHumedad().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getLuz(){
    this.msg= 'Luz';
    this.sensors.data = [];
    this.websocketService.getLuz().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getMovimiento(){
    this.msg= 'Movimiento';
    this.sensors.data = [];
    this.websocketService.getMovimiento().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getTemperatura(){
    this.msg= 'Temperatura';
    this.sensors.data = [];
    this.websocketService.getTemperatura().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getVibracion(){
    this.msg= 'Vibracion';
    this.sensors.data = [];
    this.websocketService.getVibracion().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getLluvia(){
    this.msg= 'Lluvia';
    this.sensors.data = [];
    this.websocketService.getLluvia().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }

  getSuelo(){
    this.msg= 'Suelo';
    this.sensors.data = [];
    this.websocketService.getSuelo().subscribe(res => {
      console.log(res);
      this.sensors = res;
    });
  }
}

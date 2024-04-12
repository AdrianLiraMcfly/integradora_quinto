import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantsService } from '../Services/plants.service';
import { PlantOneData } from '../core/interfaces/plant';
import { PlantRegistrer, PlantUpdate } from '../core/interfaces/plantsData';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../Services/message.service';
import { ModalComponent } from '../components/modal/modal.component';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import { OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../Services/websocket.service';
import { Mongo } from '../core/interfaces/mongo';



@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent implements OnInit, OnDestroy{
  plantdata: any;
  id: number=0;
  errormsg: string = '';
  isError = false;
  alert = '';
  echo:any;
  newPlant: PlantRegistrer = {plant: ''};
  putPlant: PlantUpdate = {plant: '', status: 0};
  data_sensor: Mongo = {data: { _id: '', Temperatura: { Valor: 0, Unidad: '', Fecha: '' }, Humedad: { Valor: 0, Unidad: '', Fecha: '' }, Lluvia: { Valor: 0, Unidad: '', Fecha: '' }, Suelo: { Valor: 0, Unidad: '', Fecha: '' }, Agua: { Valor: 0, Unidad: '', Fecha: '' }, Luz: { Valor: 0, Unidad: '', Fecha: '' }, Movimiento: { Valor: 0, Unidad: '', Fecha: '' },Vibracion:{Valor:0,Unidad:'',Fecha:''}, updated_at: '', created_at: '' }};
  

  constructor(private route: ActivatedRoute, private plantsService: PlantsService, private msg: MessageService,private socket: WebsocketService) {
    };
   
  
  
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

  
    if (id) {
      this.plantsService.getPlantsById(parseInt(id)).subscribe(res => {
        console.log(res);
        this.plantdata = res;
      });
    } else {
      console.log('ID no definido');
    }

    this.errormsg = this.msg.getMessage();

    if (this.errormsg == 'Planta actualizada correctamente') {
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert = '';
      }, 10000);
    }

    if (this.errormsg == 'Planta eliminada correctamente') {
      this.isError = true;
      this.alert = 'alert alert-danger';
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert = '';
      }, 10000);
    }
    this.socket.getMongo().subscribe((response)=>{
      console.log(response);
    });
    this.websocket();
  }

  formPlant = new FormGroup({
    plant: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
  });

  updatePlant = new FormGroup({
    plantPut: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    status: new FormControl(0, [Validators.required]),
  });

  get plant() {
    return this.formPlant.get('plant');
  }
  get plantPut() {
    return this.updatePlant.get('plantPut');
  }
  get status() {
    return this.updatePlant.get('status');
  }

  openModal(id: string) {
    this.id = parseInt(id);
  }

  editModal(id: string, plant: string, status: number) {
    this.id = parseInt(id);
    this.putPlant.plant = plant;
    this.putPlant.status = status;
  }

  deletePlant(id: number) {
    this.plantsService.eliminarPlants(id).subscribe(res => {
      this.ngOnInit();
    });
  }

  editPlant(id: number) {
    this.plantsService.actualizarPlants(this.putPlant, id).subscribe(res => {
      this.msg.setMessage('Planta actualizada correctamente');
      this.ngOnInit();
    });
  }

  websocket(){
    
    (window as any).Pusher = Pusher;
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'lifePlants09123',
      cluster: 'mt1',
      encrypted: true,
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });
    this.echo.channel('dataSensors').listen('.MongoData', (e: any) => {
    
      console.log('hola');
      console.log(this.echo);
      console.log(e);
      this.data_sensor = e;
      console.log('PRUEBAAAA')
      console.log(this.data_sensor);
    });
  }
  closewebsocket(){
    if(this.echo){
      this.echo.disconnect();
    }
  }

  ngOnDestroy(): void {
      this.closewebsocket();
  }

}

import { Component } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { PlantData } from '../core/interfaces/plantsData';
import { ModalComponent } from '../components/modal/modal.component';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { PlantRegistrer, PlantUpdate } from '../core/interfaces/plantsData';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule, ModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.css'
})
export class PlantsComponent {
  plants:any;
  id:number = 0;
  newPlant:PlantRegistrer = {plant:''};
  putPlant:PlantUpdate = {plant:'',status:0};
  isError = false;
  alert = '';
  errormsg:string = '';

  constructor(private plantsService: PlantsService, private msg:MessageService) {}

  ngOnInit() {
    this.plantsService.getPlants().subscribe(res => {
      console.log(res);
      this.plants = res;
    });
    this.id = 0;
    this.errormsg = this.msg.getMessage();
    if(this.errormsg == 'Planta actualizada correctamente'){
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert = '';
      }, 10000);
    }
    if(this.errormsg == 'Planta eliminada correctamente'){
      this.isError = true;
      this.alert = 'alert alert-danger';
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert = '';
      }, 10000);
    }
    if(this.errormsg == 'Planta registrada correctamente'){
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.errormsg = '';
        this.alert = '';
      }, 10000);
    }

  }

  formPlant = new FormGroup({
    plant: new FormControl('', [Validators.required])
  });

  updatePlant = new FormGroup({
    plantPut: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  get plantPut() { return this.updatePlant.get('plantPut'); }
  get status() { return this.updatePlant.get('status'); }
  get plant() { return this.formPlant.get('plant'); }
  
  openModal(id:number) {
    this.id = id;
  }

  editModal(id:number, plant:string, status:number) {
    this.id = id;
    this.putPlant.plant = plant;
    this.putPlant.status = status;
  }

  deletePlant(id:number) {
    this.plantsService.eliminarPlants(id).subscribe(res => {
      this.msg.setMessage('Planta eliminada correctamente');
      this.ngOnInit();
    });
  }

  editPlant(id:number) {
    this.plantsService.actualizarPlants(this.putPlant,id).subscribe(res => {
      console.log(res);
      this.msg.setMessage('Planta actualizada correctamente');
      console.log(this.errormsg)
      this.ngOnInit();
    });
  }

  addPlant() {
    this.plantsService.registrarPlants(this.newPlant).subscribe(res => {
      console.log(res);
      this.msg.setMessage('Planta registrada correctamente');
      this.ngOnInit();
    });
  }

  getImg(){
    const numero = Math.floor(Math.random() * 5) + 1;
    return `../../../assets/imagenes/plantsIcons/${numero}.jpg`;
  }
}

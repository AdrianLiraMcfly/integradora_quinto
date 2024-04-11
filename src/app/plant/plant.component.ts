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

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent {
  plantdata: any;
  id: number=0;
  errormsg: string = '';
  isError = false;
  alert = '';
  newPlant: PlantRegistrer = {plant: ''};
  putPlant: PlantUpdate = {plant: '', status: 0};
  constructor(private route: ActivatedRoute, private plantsService: PlantsService, private msg: MessageService) {
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


}

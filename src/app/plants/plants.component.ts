import { Component } from '@angular/core';
import { PlantsService } from '../Services/plants.service';
import { CommonModule } from '@angular/common';
import { PlantData } from '../core/interfaces/plantsData';
import { ModalComponent } from '../components/modal/modal.component';
import { FormControl, FormsModule, ReactiveFormsModule ,FormGroup,Validators} from '@angular/forms';
import { PlantRegistrer, PlantUpdate } from '../core/interfaces/plantsData';
import { MessageService } from '../Services/message.service';
import { Route, Router } from '@angular/router';

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
  filteredPlants:string= 'all';
  newPlant:PlantRegistrer = {plant:''};
  isError = false;
  alert = '';
  errormsg:string = '';
  srcImg:String[]= []; 
  img= '';

  constructor(private plantsService: PlantsService, private msg:MessageService, private router:Router) {
  
  }

  ngOnInit() {
    
    this.plantsService.getPlants().subscribe(res => {
      this.plants = res;
      console.log(this.plants);
      for (let i = 0; i < this.plants.data.length; i++) {
         this.img = this.getImg(); // get a new image path
        this.srcImg.push(this.img); // push it into the array
      }
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

  plantForm = new FormGroup({
    plant: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  });

  get plant() { return this.plantForm.get('plant'); }

  addPlant(){
    this.plantsService.registrarPlants(this.newPlant).subscribe(res => {
      this.msg.setMessage('Planta registrada correctamente');
      this.ngOnInit();
    });
  }

  getImg(){
    const numero = Math.floor(Math.random() * 5) + 1;
    return `../../../assets/imagenes/plantsIcons/${numero}.jpg`;
}


  openPlant(id:string){
    this.router.navigate(['/lifeplants/plant',id]);
  }

  filterPlants(plant:any) {
    this.filteredPlants = plant
}

}

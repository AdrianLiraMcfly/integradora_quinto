import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { PlantData } from '../core/interfaces/plantsData';
import { PlantOneData } from '../core/interfaces/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http:HttpClient) { }
  
  getPlants():Observable<PlantData[]>{
    return this.http.get<PlantData[]>(`${environment.UrlPlants}/index`);
  }

  registrarPlants(plant:any){
    return this.http.post(`${environment.UrlPlants}/store`, plant);
  }

  actualizarPlants(plant:any,id:number){
    return this.http.put(`${environment.UrlPlants}/update/${id}`, plant);
  }

  eliminarPlants(id:number){
    return this.http.delete(`${environment.UrlPlants}/destroy/${id}`);
  }

  getPlantsById(id:number):Observable<PlantOneData[]>{
    return this.http.get<PlantOneData[]>(`${environment.UrlPlants}/show/${id}`);
  }

}

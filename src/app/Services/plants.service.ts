import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http:HttpClient) { }
  
  getPlants(){
    return this.http.get(`${environment.UrlPlants}/index`);
  }

  registrarPlants(plant:any){
    return this.http.post(`${environment.UrlPlants}/store`, plant);
  }

  actualizarPlants(id:number, plant:any){
    return this.http.put(`${environment.UrlPlants}/update/${id}`, plant);
  }

  eliminarPlants(id:number){
    return this.http.delete(`${environment.UrlPlants}/delete/${id}`);
  }

  getPlantsById(id:number){
    return this.http.get(`${environment.UrlPlants}/show/${id}`);
  }

}

import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { sensorsData } from '../core/interfaces/sensors';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private http:HttpClient) { }

  getSensors(){
    return this.http.get<sensorsData>(`${environment.UrlSensors}/index`);
  }

  StoreSensor(sensor: any){
    return this.http.post<any>(`${environment.UrlSensors}/store`, sensor);
  }

  putSensor(id: number, sensor: any){
    return this.http.put<any>(`${environment.UrlSensors}/update/${id}`, sensor);
  }

  deleteSensor(id: number){
    return this.http.delete<sensorsData>(`${environment.UrlSensors}/destroy/${id}`);
  }

  getSensor(id: number){
    return this.http.get<sensorsData>(`${environment.UrlSensors}/show/${id}`);
  }
}

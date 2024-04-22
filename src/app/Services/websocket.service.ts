import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mongo } from '../core/interfaces/mongo';
import { SensorFilter } from '../core/interfaces/mongosensores';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private http:HttpClient) { }

  getMongo(){
    return this.http.get<Mongo>('http://18.227.105.11:8000/api/v1/websocket/last');
  }

  getAgua(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/agua');
  }

  getHumedad(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/humedad');
  }

  getLuz(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/luz');
  }

  getMovimiento(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/movimiento');
  }

  getTemperatura(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/temperatura');
  }

  getVibracion(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/vibracion');
  }

  getLluvia(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/lluvia');
  }

  getSuelo(){
    return this.http.get<SensorFilter>('http://18.227.105.11:8000/api/v1/websocket/suelo');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mongo } from '../core/interfaces/mongo';
import { environment } from '../core/envairoments';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private http:HttpClient) { }

  getMongo(){
    return this.http.get<Mongo>('http://18.227.105.11:8000/api/v1/websocket/last');
  }
}

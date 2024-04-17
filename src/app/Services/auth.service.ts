import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDataInterface, RegisterResponseInterface } from '../core/interfaces/registrer';
import { LoginDataInterface, LoginResponseInterface, LoginAuthInterface, tokenResponseInterface } from '../core/interfaces/login';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isauth():Observable<HttpResponse<any>>{
    return this.http.get<any>(`${environment.UrlAuth}/me`,{observe:'response'});
  }

  register(data:RegisterDataInterface):Observable<RegisterResponseInterface>{
    return this.http.post<RegisterResponseInterface>(`${environment.UrlAuth}/register`,data);
  }

  login(data:LoginDataInterface):Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${environment.UrlAuth}/login`,data);
  }
  
  verify(data:LoginAuthInterface):Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${environment.UrlAuth}/login`,data);
  }

  me():Observable<tokenResponseInterface>{
    return this.http.get<tokenResponseInterface>(`${environment.UrlAuth}/me`);
  }

  checkRol():Observable<HttpResponse<any>>{
    return this.http.get<any>(`${environment.UrlAuth}/getrol`,{observe:'response'});
  }

  checkActive():Observable<any>{
    return this.http.get<any>(`${environment.UrlAuth}/getstatus`,{observe:'response'});
  }

  logout():Observable<HttpResponse<any>>{
    return this.http.post<any>(`${environment.UrlAuth}/logout`,{observe:'response'});
  }
}
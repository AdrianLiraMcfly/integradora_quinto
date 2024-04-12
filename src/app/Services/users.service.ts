import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../core/interfaces/users';
import { userRegister } from '../core/interfaces/userRegister';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserData>(`${environment.UrlUsers}/index`);
  }

  StoreUser(user: userRegister) {
    return this.http.post<userRegister>(`${environment.UrlUsers}/store`, user);
  }

  putUser(user: userRegister, id:number) {
    return this.http.put<userRegister>(`${environment.UrlUsers}/update/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<UserData>(`${environment.UrlUsers}/destroy/${id}`);
  }

  getUser(id: number) {
    return this.http.get<UserData>(`${environment.UrlUsers}/show/${id}`);
  }
}

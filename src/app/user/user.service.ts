import { Observable } from 'rxjs';
import { User } from './model/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_USUARIOS = 'api/usuarios';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API_USUARIOS);
  }
}

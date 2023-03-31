import { first, Observable } from 'rxjs';
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

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_USUARIOS}/${id}`);
  }

  save(record: any) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<User>) {
    return this.http.post<User>(this.API_USUARIOS, record);
  }

  private update(record: User) {
    return this.http.put<User>(`${this.API_USUARIOS}/${record.id}`, record);
  }

}

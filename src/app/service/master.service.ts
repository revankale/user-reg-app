import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { USER } from '../core/user';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCity(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cityList`);
  }

  getState():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/stateList`);
  }

  getUser():Observable<USER[]>{
    return this.http.get<USER[]>(`${this.apiUrl}/userList`);
  }

  addUser():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/creatUser`);
  }

  deleteUser(id:number):Observable<any>{
 return this.http.delete<any>(`${this.apiUrl}/deleteUser/${id}`)
  }








}

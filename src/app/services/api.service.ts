import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponce, UserCred } from '../interface/taskinterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  
  constructor(private http:HttpClient) { }

  onLogin(body:UserCred){
    return this.http.post<ApiResponce>('/login',body)
  }

  onRegister(body:UserCred){
    return this.http.post<ApiResponce>('/register',body)
  }

 

}

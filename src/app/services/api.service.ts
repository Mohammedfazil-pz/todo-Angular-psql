import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponce, TaskType, UserCred } from '../interface/taskinterface';

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

  onAddTask(body:any){
    return this.http.post<ApiResponce>('/addtask',body)
  }

  onFetchTask(){
    return this.http.get('/fetchuserTask')
  }

  onDeleteTask(taskID:string){
    return this.http.delete<ApiResponce>(`/deletetask?onDeleteTask=${taskID}`)
  }

  onUpdateTask(body:any){
    return this.http.patch<ApiResponce>('/onUpdateTasks',body)
  }

 

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { ApiResponce, TaskType } from '../../interface/taskinterface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  inputValue:string=""
  taskArray:TaskType[]=[]
  modalTask:any

  ngOnInit(){
    this.onFetchUserTasks()
  }

  constructor(private toast:ToastService,private api:ApiService){
  }


  onInput(){
   if(!this.inputValue){
    return this.toast.onErrorToast("Please enter a task!")
   }

   this.api.onAddTask({content:this.inputValue}).subscribe({
    next:(res:ApiResponce)=>{
      this.toast.onSuccessToast(res.message)
      this.inputValue=""
      this.onFetchUserTasks()
    },
    error:(res:ApiResponce)=>{
      this.toast.onErrorToast(res.error.message)
    }
   })

  }

  onFetchUserTasks(){
    this.api.onFetchTask().subscribe((res:any)=>{
      this.taskArray=res.task
      console.log(this.taskArray)
    })
  }

  onDeleteTask(id:string){
    this.api.onDeleteTask(id).subscribe({
      next:(res:ApiResponce)=>{
        this.toast.onSuccessToast(res.message)
        this.onFetchUserTasks()
      },
      error:(res:ApiResponce)=>{
        this.toast.onErrorToast(res.error.message)
      }
    })
  }

  ModalValue(task:TaskType){
    this.modalTask={
      task:task.task,
      id:task.id
    }
  }

  onUpdateClick(ModalValue:any){
    const object={task:ModalValue.value,id:this.modalTask.id}
    this.api.onUpdateTask(object).subscribe({
      next:(res:ApiResponce)=>{
        this.toast.onSuccessToast(res.message)
        this.onFetchUserTasks()
      },
      error:(res:ApiResponce)=>{
        this.toast.onErrorToast(res.error.message)
      }
    })
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
   toast:boolean=false
  errorToast:boolean=false
  toastMessage:string=""

  constructor() { }

   onErrorToast(value:string){
    this.toastMessage=value
    this.errorToast=true
    setTimeout(() => {
      this.errorToast=false
    }, 2000);
  }
  
  onSuccessToast(value:string){
    this.toastMessage=value
    this.toast=true
    setTimeout(()=>{
      this.toast=false
    },2000)
  }
}

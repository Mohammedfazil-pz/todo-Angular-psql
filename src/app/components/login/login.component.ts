import { Component } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiResponce, UserCred } from '../../interface/taskinterface';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData:UserCred

  constructor(private api:ApiService,private toast:ToastService,private router:Router){
    this.formData={
      username:"",
      email:""
    }
  }

  onLoginSubmit(){
    if(this.formData.email&&this.formData.password){
      this.api.onLogin(this.formData).subscribe({
        next:(message:ApiResponce)=>{
          this.toast.onSuccessToast(message.message)
          sessionStorage.setItem('token',message.token)
          this.router.navigateByUrl('/home')
        },
        error:(message:ApiResponce)=>{
          this.toast.onErrorToast(message.error.message)
        }
      })
    }else{
     this.toast.onErrorToast("Please fill the Form!")
    }
  }


}

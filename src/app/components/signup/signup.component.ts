import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiResponce, UserCred } from '../../interface/taskinterface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  RegisterForm:FormGroup

  constructor(private fb:FormBuilder,private toast:ToastService,private api:ApiService,private router:Router){
    this.RegisterForm=fb.group({
      username:['',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-Z ]+[0-9 ]*")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  onRegisterClick(){
    if(this.RegisterForm.valid){
      this.api.onRegister(this.RegisterForm.value).subscribe({
        next:(res:ApiResponce)=>{
          this.toast.onSuccessToast(res.message)
          this.router.navigateByUrl('/')
        },
        error:(res:ApiResponce)=>{
          this.toast.onErrorToast(res.error.message)
          this.RegisterForm.reset()
        }
      })
      this.toast.onSuccessToast("Register success")
    }else{
      this.toast.onErrorToast("Please check the form!")
    }
  }

}

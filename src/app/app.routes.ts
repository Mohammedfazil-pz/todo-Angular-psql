import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:SignupComponent},
    {path:'home',canActivate:[authGuard],loadComponent:()=>import('./components/home/home.component').then((res)=>res.HomeComponent)}
];

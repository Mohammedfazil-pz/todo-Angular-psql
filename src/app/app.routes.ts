import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:SignupComponent},
    {path:'home',component:HomeComponent}
];

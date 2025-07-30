import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token=sessionStorage.getItem("token")
  const router=inject(Router)
  const toast=inject(ToastService)
  if(!token){
    router.navigateByUrl("/")
    toast.onErrorToast("Not authorized please login!")
  }
  return true;
};

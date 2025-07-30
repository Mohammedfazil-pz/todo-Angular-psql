import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const token=sessionStorage.getItem("token")
  const newRequest=req.clone({
    url:'http://localhost:3000/api'+req.url,
    setHeaders:{'Authorization':`bearer ${token}`}
  })
  console.log(newRequest)
  return next(newRequest);
};

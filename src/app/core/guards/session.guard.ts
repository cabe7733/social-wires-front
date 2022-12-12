import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  token:any;
  constructor( private router:Router, private loginServices:LoginService){}

  canActivate(): boolean{
    this.token = this.loginServices.getToken();
    if (!this.token) {
      this.router.navigate(['/auth/login'])
      return false;
    }
    return true;
  }


}

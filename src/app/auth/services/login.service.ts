import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(data:any){
    let url ="login";
    return this.http.post<any>(environment.urlApi+url,data);
  }

  logout(){
    let url ="logout";
    return this.http.post<any>(environment.urlApi+url,{});
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postRegister(data:any){
    let url ="/user/register";
    return this.http.post<any>(environment.urlApi+url,data);
  }

}

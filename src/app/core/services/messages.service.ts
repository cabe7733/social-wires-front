import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  createMessage(data:any){
    let url ="message";
    return this.http.post<any>(environment.urlApi+url,data);
  }

  allMessage(){
    let url ="message";
    return this.http.get<any>(environment.urlApi+url);
  }

  myMessage(id:any){
    let url ="message/";
    return this.http.get<any>(environment.urlApi+url+id);
  }
}

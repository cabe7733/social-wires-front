import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  message:any;
  constructor(private services:MessagesService) { }

  ngOnInit(): void {
  }

  getMessages(id:any){
    this.services.myMessage(id).subscribe(data=>{
      this.message=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessagesComponent implements OnInit {

  message:any;
  constructor(private services:MessagesService) { }

  ngOnInit(): void {
  }

  getMessages(){
    this.services.allMessage().subscribe(data=>{
      this.message=data;
    })
  }
}

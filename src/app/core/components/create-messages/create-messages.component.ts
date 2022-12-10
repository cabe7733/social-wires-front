import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.scss']
})
export class CreateMessagesComponent implements OnInit {

  postMessage: FormGroup;
  message:any;
  constructor(private services:MessagesService) {
    this.postMessage = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      message: new FormControl(null,[Validators.required, Validators.minLength(5)])
   });
   }

  ngOnInit(): void {
  }

  getMessages(id:any){
    this.services.myMessage(id).subscribe(data=>{
      this.message=data;
    })
  }

  createMessage(){
    this.postMessage.value
    this.postMessage.reset()
  }
}

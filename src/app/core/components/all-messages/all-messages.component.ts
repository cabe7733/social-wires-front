import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, takeUntil, Observable } from 'rxjs';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessagesComponent implements OnInit {

  title = 'Comidas Geniales';
  searchTerm$ = new BehaviorSubject<string>('');
  private OnDestroy$ = new Subject();

  message:any;
  listFiltered$: Observable<string []>;

  constructor(private services:MessagesService) { }

  ngOnInit(): void {
    this.filterList();
  }

  getMessages(){
    this.services.allMessage().subscribe(data=>{
      this.message=data;
    })
  }


  filterList(): void {
    this.searchTerm$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntil(this.OnDestroy$),
      )
      .subscribe(term => {
        this.listFiltered$ = this.message
          .filter(item => item.toLowerCase().indexOf(term.toLowerCase()) >= 0);
      });
  }
}

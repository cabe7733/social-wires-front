import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isList: boolean;
  isMenu: boolean = false;
  isSearch: boolean = false;
  subList = 3;
  constructor() { }

  ngOnInit(): void {
  }

}

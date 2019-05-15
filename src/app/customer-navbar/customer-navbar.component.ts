import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent implements OnInit {

  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;

  constructor() { }

 changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  ngOnInit() {
    this.displayMode = DisplayModeEnum.Card;
  }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
}

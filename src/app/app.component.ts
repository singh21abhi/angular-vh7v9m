import { Component, OnInit } from '@angular/core';
import { CustmerService } from './customer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  customer: any;
  customerData: any = [];
  constructor(private dataService: CustmerService ) { }
  
  getCustomrData() {
    this.dataService.getCustomerData().subscribe(data => {
     this.customerData = data;
     console.log(this.customerData);
    })
  }

  
  ngOnInit() {
    this.getCustomrData();
      }

  }




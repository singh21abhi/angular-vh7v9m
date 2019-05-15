import { Component, OnInit } from '@angular/core';
import { CustmerService } from '../customer.service';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class CustmerService {
  
    orders: any[];
    states: any[];

    constructor(private http: HttpClient) { }

    getCustomerData() {
      return this.http.get("./assets/api/custmer.json");
    }

}

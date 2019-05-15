import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustmerService } from './customer.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerNavbarComponent,
    CustomerGridComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [CustmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

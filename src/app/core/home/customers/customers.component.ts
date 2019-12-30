import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  showCustomersTab = true;
  cars: any[];

  constructor() { 
    
    this.cars = [
      {
        "country": "EGYPT",
        "name": "Car1"
      },{
        "country": "EGYPT",
        "name": "Car1"
      },{
        "country": "EGYPT",
        "name": "Car1"
      },{
        "country": "EGYPT",
        "name": "Car1"
      },{
        "country": "EGYPT",
        "name": "Car1"
      }
    ];
  }


  ngOnInit() {
  }

  toggleCustomersIndustries(x: number){
    if(x==0)
      this.showCustomersTab = true;
    else
      this.showCustomersTab = false;
  }
  
}

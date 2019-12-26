import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css']
})
export class LatestProjectsComponent implements OnInit {
  cars: any[];
  constructor() { }

  ngOnInit() {

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
}

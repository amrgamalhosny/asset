import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  showFirstTab = true;

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


  toggleSolutionService(x: number){
    if(x==0)
      this.showFirstTab = true;
    else
      this.showFirstTab = false;
  }

}

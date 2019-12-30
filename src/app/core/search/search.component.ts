import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
customers;
solutions;
services;
egy: boolean = false;
por: boolean = false;
query;

check(value: string) {
  if (value === 'Portugal') { this.por = !this.por }
  if (value === 'Egypt') { this.egy = !this.egy }
  
  if (this.por && !this.egy){
    this.solutions = this.solutions.filter(data =>
      (data.country == 'Portugal')
     
    )
  } else if (this.egy && !this.por){
    this.solutions = this.solutions.filter(data =>
      (data.country == 'Egypt')
     
    )
  } else {
    this._searchService.getSol()
    .subscribe(
      data => {
        this.solutions = data 
      }
    ); }
  }

  constructor(private _searchService:SearchService) { }

  ngOnInit() {
    this.getCustomers();
    this.getSolutions();
    this.getServices();
  }

  getCustomers(){
    this._searchService.getCust()
    .subscribe(
      data => {
        this.customers = data ;
      }
    );  
  }

  getSolutions(){
    this._searchService.getSol()
    .subscribe(
      data => {
        this.solutions = data 
      }
    );  
  }



  getServices(){
    this._searchService.getSer()
    .subscribe(
      data => {
        this.services = data ;
      }
    );  
  }
}

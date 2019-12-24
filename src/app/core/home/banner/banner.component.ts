import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-banner',
  animations: [
    trigger('focusInOut', [
      state('focusOn', style({
        width: '80%'
      })),
      state('focusOut', style({
        width: '60%'
      })),
      transition('focusOn => focusOut', [
        animate('1s')
      ]),
      transition('focusOut => focusOn', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
bannerCustomers: any;
testOne: any;
testTwo: any;
testThree: any;
showResults = false;
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.getBannerCustomers();
    this.getTestOne();
    this.getTestTwo();
    this.getTestThree();
  }
// Animations
  isFocus = false;

  toggle() {
    this.isFocus = !this.isFocus;
  }
  // Focus on Search input
  showResultsFn(){
    this.showResults =! this.showResults;
    this.isFocus = true;
  }
   // Focus out Search input
  hideResultsFn(){
    this.showResults =! this.showResults;
    this.isFocus = false;
  }
  // Banner Customers Data
  getBannerCustomers(){
    this._homeService.getBannerCustomers()
    .subscribe(
      data => {
        this.bannerCustomers = data ;
       
      }
    );
  }
  getTestOne(){
    this._homeService.getTestOne()
    .subscribe(
      data => {
        this.testOne = data ;
      }
    );  
  }
  getTestTwo(){
    this._homeService.getTestTwo()
    .subscribe(
      data => {
        this.testTwo = data ;
      }
    );  
  }
  getTestThree(){
    this._homeService.getTestThree()
    .subscribe(
      data => {
        this.testThree = data ;
      }
    );  
  }
  
}

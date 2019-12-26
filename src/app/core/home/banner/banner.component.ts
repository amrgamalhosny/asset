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
    // Search Input Animation
    trigger('focusInOut', [
      state('focusOn', style({
        width: '778px'
      })),
      state('focusOut', style({
        width: '655px'
      })),
      state('btnOn', style({
        right: '16%'
      })),
      state('btnOut', style({
        right: '22.5%'
      })),
      state('textOn', style({
        fontSize : '35px'
      })),
      state('textOut', style({
        fontSize : '60px'
      })),
      transition('focusOn => focusOut', [
        animate('0.5s')
      ]),
      transition('focusOut => focusOn', [
        animate('0.5s')
      ]),
      transition('btnOn => btnOut', [
        animate('0.5s')
      ]),
      transition('btnOut => btnOn', [
        animate('0.5s')
      ]),
      transition('textOn => textOut', [
        animate('0.5s')
      ]),
      transition('textOut => textOn', [
        animate('0.5s')
      ]),
    ]),
     // Results Container Animation
    trigger('resultsInOut', [
      state('resultsOn', style({
        height: '*',
        opacity: '1',
        top: '252px'
      })),
      state('resultsOut', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden',
        top: '312px'
      })),
      transition('resultsOn => resultsOut', [
        animate('0.5s')
      ]),
      transition('resultsOut => resultsOn', [
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

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.getBannerCustomers();
    this.getTestOne();
    this.getTestTwo();
    this.getTestThree();
  }
// Animations
  isFocus = false;
  showResults = false;
  toggle() {
    this.isFocus = !this.isFocus;
  }
  // Focus on Search input
  showResultsFn(){
    this.showResults = true;
    this.isFocus = true;
  }
   // Focus out Search input
  hideResultsFn(){
    this.showResults = false;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  bannerCustomers = 'https://jsonplaceholder.typicode.com/photos';

  TestOne = 'https://jsonplaceholder.typicode.com/posts';
  TestTwo = 'https://jsonplaceholder.typicode.com/posts';
  TestThree = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getBannerCustomers(){
    return this.http.get(this.bannerCustomers);
  }

  getTestOne(){
    return this.http.get(this.TestOne);
  }
  getTestTwo(){
    return this.http.get(this.TestTwo);
  }
  getTestThree(){
    return this.http.get(this.TestThree);
  }

}

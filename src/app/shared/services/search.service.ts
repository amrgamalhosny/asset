import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  customers="../assets/data.json";
  solutions='../assets/sol.json';
  services='../assets/serv.json';
  
  constructor(private http: HttpClient) { }

  getCust(){
    return this.http.get(this.customers); 
  }

  getSol(){
    return this.http.get(this.solutions); 
  }

  getSer(){
    return this.http.get(this.services); 
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrserserviceService {

  constructor(private http:HttpClient) { }

  getpiz(){
    return this.http.get<Object>('http://localhost:3300/getpizza');
  }

  addpizza(cart){
    return this.http.post<Object>('http://localhost:3300/addcart',cart).subscribe();
  }
}

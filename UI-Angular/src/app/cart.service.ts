import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // email=localStorage.getItem('email');
   
  constructor(private http:HttpClient) { }
  getpizzacart(){
     return this.http.get<Object>(`http://localhost:3300/getcart/${localStorage.getItem('mail')}`)
   

  }

 

  delpizzacart(pname){
    this.http.delete<Object>(`http://localhost:3300/deletecart/${pname}`).subscribe();

  }

 

}

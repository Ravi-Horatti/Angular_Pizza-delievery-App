import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildserviceService {

  constructor(private http:HttpClient  ) { }

  getings(){
    return this.http.get<Object>('http://localhost:3300/getingredients');
   

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getuserdb(){
 
    return this.http.get<Object>(`http://localhost:3300/getuser`);
  }

  postuser(form){
    this.http.post<JSON>('http://localhost:3300/adduser',form).subscribe()
  }
}

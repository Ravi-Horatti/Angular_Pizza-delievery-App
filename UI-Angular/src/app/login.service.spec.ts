import { TestBed ,inject} from '@angular/core/testing';
import {HttpClient, HttpErrorResponse } from '@angular/common/http' 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';


describe('ProductService', () => {

  let httpTestCtrl : HttpTestingController;
  let dataserv: LoginService;
  beforeEach(() => {
     TestBed.configureTestingModule({
       imports:[HttpClientTestingModule],
      providers: [LoginService]
    });
  });
  beforeEach(() => {
   dataserv=TestBed.get(LoginService);
   httpTestCtrl=TestBed.get(HttpTestingController)
 });

  it('should Check the Get User MEthod From User Db',()=>{
    var testPost: [
      { "_id" : "5fc73af74bb695771cc16983", "fname" : "Ravi", "lname" : "Horatti", "password" : "ravi123", "email" : "ravi@gmail.com", "phone" : "9876543210", "type" : "regular" }
      
    ];

      dataserv. getuserdb().subscribe((post)=>{
          expect(testPost).toBe(post[0]);;  
      });   
      
      const req = httpTestCtrl.expectOne(`http://localhost:3300/getuser`);

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testPost);
    
   
  });
});


import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-register',
  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 
  fname:String;
  lname:String;
  email:String;
  passw:String;
  phone:String;
  type:String;


  jsn:any;
  constructor(private regi:LoginService ,  private router:Router){}

 
  

  postBook(){
    var val:boolean;
   // this.router.navigate(["/login"]);

      if (this.fname === null || this.lname === null || this.passw=== undefined) {
     
        alert("All the Feilds are mandatory")
        val=false;
      }else{val=true}
   
  


     if(val) {
    this.jsn={"fname":this.fname,"pass":this.passw,"lname":this.lname , "email":this.email,"phone":this.phone,"type":"regular"};
   this.regi.postuser(this.jsn);
    {{alert("User Added!!"); 
    this.router.navigate(["/login"]);
    }
    
  
}
}
  }}

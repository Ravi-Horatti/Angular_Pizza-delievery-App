import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  constructor(private getuser:LoginService , private router:Router){}

 
  
  username:string;
  passw:string;
 logindata:any;
//mail:string

  loggin(){
    const user={
      user:this.username,
      passw:this.passw  
    }
   var n=false;
  

    this.getuser.getuserdb().subscribe(data=>{
     this.logindata=data;

      console.log(this.logindata)
    //  console.log(user.user)
     // console.log(user)

     for(var i=0;i<this.logindata.length;i++){
     

      if(user.passw==this.logindata[i].password){
        n=true;
        localStorage.setItem('Name',this.logindata[i].fname);
        console.log('Name->'+this.logindata[i].fname);
       
        
        
      }
     
     
    }
    if(n){
      alert('login success');
      localStorage.setItem('mail',user.user);
      this.router.navigate(["home"]);
    }
    else{
      alert('Invalid credentials');
    }


    })
  }

}

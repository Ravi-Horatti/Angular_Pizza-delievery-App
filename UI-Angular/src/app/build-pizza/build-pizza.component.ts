import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildserviceService } from '../buildservice.service';
import { OrserserviceService } from '../orserservice.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {
titl='app-build-pizza';
  constructor(private ingList:BuildserviceService ,private ingpizza:OrserserviceService ){}
  contlist:object
  sum=0
  ngOnInit(): void {
    this.ingList.getings().subscribe(data=>this.contlist=data);
   
  }

  addtocart(ll){
    console.log(ll);
   
    var cart={
      email:localStorage.getItem('mail'),
      id:ll.id,
      price:ll.price,
      name:ll.tname
      
    }
    this.ingpizza.addpizza(cart);


  }

  calprice(price,isChecked:boolean){
    if(isChecked){
    this.sum = this.sum+price
    document.getElementById('p').innerHTML="Total cost :"+this.sum;
    }
    else{
        this.sum = this.sum-price
        document.getElementById('p').innerHTML="Total cost :"+this.sum;
    }
    return this.sum;
}

}


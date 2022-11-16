import { Component, OnInit } from '@angular/core';
import { OrserserviceService } from '../orserservice.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  
  constructor(private ingpizza:OrserserviceService ){}
  pizalist:object
 
  ngOnInit(): void {
    this.ingpizza.getpiz().subscribe(data=>this.pizalist=data);
    document.getElementsByClassName('veg')// = false;
   
  }
  onAdd(pizza){
    document.getElementById(pizza._id).hidden = false;
    var cart={
      email:localStorage.getItem('mail'),
      id:pizza.id,
      price:pizza.price,
      name:pizza.name
      
    }
    this.ingpizza.addpizza(cart);
  }

}

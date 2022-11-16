import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private pizzServ:CartService){}
  pizzcart:any
  adddata:any
  pjsn:any
  ajsn:any
  sum=0
  ngOnInit(){
      this.pizzServ.getpizzacart().subscribe(result=>this.pizzcart=result);
      console.log( 'cart is-->'+this.pizzcart)
    


  }

  delpizza(id){
      console.log("passing pname--->>"+id)
     // this.pjsn={name:pname}
      this.pizzServ.delpizzacart(id);
      window.location.reload();
  }

  Bill(){
      for(let i=0;i<this.pizzcart.length;i++){
        this.sum = this.sum+parseInt(this.pizzcart[i].price)
    }
  
    document.getElementById('p').innerText="Bill is : ₹"+this.sum
}
}
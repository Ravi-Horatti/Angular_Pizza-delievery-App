import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
   {path:"order-pizza", component:OrderPizzaComponent},
   {path:"build-pizza", component:BuildPizzaComponent},
   {path:"cart", component:CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

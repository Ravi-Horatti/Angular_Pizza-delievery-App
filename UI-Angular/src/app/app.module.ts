import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuildserviceService } from './buildservice.service';
import { HttpClientModule } from '@angular/common/http';
import { OrserserviceService } from './orserservice.service';
import { CartComponent } from './cart/cart.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { LoginService } from './login.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderPizzaComponent,
    BuildPizzaComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [BuildserviceService , OrserserviceService , LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrserserviceService } from '../orserservice.service';

import { OrderPizzaComponent } from './order-pizza.component';

describe('OrderPizzaComponent', () => {
  let component: OrderPizzaComponent;
  let fixture: ComponentFixture<OrderPizzaComponent>;


    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
      declarations: [OrderPizzaComponent],
      providers: [OrserserviceService],
      imports: [HttpClientTestingModule, RouterTestingModule]
      })
      .compileComponents();
      }));
      
      beforeEach(() => {
      fixture = TestBed.createComponent(OrderPizzaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-router.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { ToppingModule } from '../topping/topping.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyOrdersResolver } from 'src/app/core/resolvers/order/my-orders.resolver';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsResolver } from 'src/app/core/resolvers/order/order-details.resolver';

@NgModule({
  declarations: [
    OrderCreateComponent,
    MyOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ToppingModule,
    ReactiveFormsModule
  ],
  providers: [
    BurgerDetailsResolver,
    ToppingInfoResolver,
    MyOrdersResolver,
    OrderDetailsResolver
  ]
})
export class OrderModule { }

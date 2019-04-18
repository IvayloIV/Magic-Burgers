import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
import { ToppingModule } from '../topping/topping.module';
import { NumberRoundPipe } from '../shared/pipes/number-round.pipe';

import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { MyOrdersResolver } from 'src/app/core/resolvers/order/my-orders.resolver';
import { OrderDetailsResolver } from 'src/app/core/resolvers/order/order-details.resolver';
import { AllOrdersResolver } from 'src/app/core/resolvers/order/all-orders.resolver';

import { orderComponents } from './index';

@NgModule({
  declarations: [
    ...orderComponents,
    NumberRoundPipe
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
    OrderDetailsResolver,
    AllOrdersResolver
  ]
})
export class OrderModule { }

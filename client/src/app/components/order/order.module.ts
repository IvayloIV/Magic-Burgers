import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { ToppingModule } from '../topping/topping.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyOrdersResolver } from 'src/app/core/resolvers/order/my-orders.resolver';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsResolver } from 'src/app/core/resolvers/order/order-details.resolver';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllOrdersResolver } from 'src/app/core/resolvers/order/all-orders.resolver';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    OrderCreateComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    AllOrdersComponent,
    OrderListComponent
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

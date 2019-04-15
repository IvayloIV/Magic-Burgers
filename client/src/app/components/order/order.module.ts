import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
import { ToppingModule } from '../topping/topping.module';
import { NumberRoundPipe } from '../shared/pipes/number-round.pipe';

import { OrderCreateComponent } from './order-create/order-create.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderDeliveryTypesComponent } from './order-delivery-types/order-delivery-types.component';
import { OrderProductsComponent } from './order-products/order-products.component';

import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { MyOrdersResolver } from 'src/app/core/resolvers/order/my-orders.resolver';
import { OrderDetailsResolver } from 'src/app/core/resolvers/order/order-details.resolver';
import { AllOrdersResolver } from 'src/app/core/resolvers/order/all-orders.resolver';

@NgModule({
  declarations: [
    OrderCreateComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    AllOrdersComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderDeliveryTypesComponent,
    OrderProductsComponent,
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

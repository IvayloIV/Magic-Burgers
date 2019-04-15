import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { BlockGuard } from 'src/app/core/guards/block.guard';

import { OrderCreateComponent } from './order-create/order-create.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { MyOrdersResolver } from 'src/app/core/resolvers/order/my-orders.resolver';
import { OrderDetailsResolver } from 'src/app/core/resolvers/order/order-details.resolver';
import { AllOrdersResolver } from 'src/app/core/resolvers/order/all-orders.resolver';

const routes: Routes = [
  { 
    path: 'create/:id', 
    component: OrderCreateComponent, 
    resolve: { burgerDetails: BurgerDetailsResolver, toppings: ToppingInfoResolver },
    canActivate: [BlockGuard] 
  },
  { 
    path: 'my', 
    component: MyOrdersComponent, 
    resolve: { myOrder: MyOrdersResolver } 
  },
  { 
    path: 'details/:id',
    component: OrderDetailsComponent, 
    resolve: { orderDetails: OrderDetailsResolver } 
  },
  { 
    path: 'edit/:id', 
    component: OrderEditComponent, 
    resolve: { orderDetails: OrderDetailsResolver } 
  },
  {
    path: 'all',
    component: AllOrdersComponent, 
    resolve: { allOrders: AllOrdersResolver },
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

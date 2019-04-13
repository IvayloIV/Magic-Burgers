import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCreateComponent } from './order-create/order-create.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';

const routes: Routes = [
  { 
    path: 'create/:id', 
    component: OrderCreateComponent, 
    resolve: { burgerDetails: BurgerDetailsResolver, toppings: ToppingInfoResolver } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

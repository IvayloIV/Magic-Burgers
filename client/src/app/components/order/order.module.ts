import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-router.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';

@NgModule({
  declarations: [
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  providers: [
    BurgerDetailsResolver,
    ToppingInfoResolver
  ]
})
export class OrderModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';

const routes: Routes = [
  { 
    path: 'list', 
    component: ToppingListComponent,
    resolve: { toppings: ToppingInfoResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingRoutingModule { }

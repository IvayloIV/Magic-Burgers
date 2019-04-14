import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { ToppingCreateComponent } from './topping-create/topping-create.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  { 
    path: 'list', 
    component: ToppingListComponent,
    resolve: { toppings: ToppingInfoResolver }
  },
  { path: 'create', component: ToppingCreateComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppingRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'burger/home' },
  { path: 'auth', loadChildren: "./components/auth/auth.module#AuthModule", canLoad: [AuthGuard] },
  { path: 'burger', loadChildren: "./components/burger/burger.module#BurgerModule" },
  { path: 'order', loadChildren: "./components/order/order.module#OrderModule", canLoad: [UserGuard] },
  { path: 'topping', loadChildren: "./components/topping/topping.module#ToppingModule", canLoad: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

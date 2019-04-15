import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

import { BurgerHomeComponent } from './burger-home/burger-home.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerCreateComponent } from './burger-create/burger-create.component';

import { BurgerTopResolver } from 'src/app/core/resolvers/burger/burger-top.resolver';
import { BurgerMenuResolver } from 'src/app/core/resolvers/burger/burger-menu.resolver';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { CommentListResolver } from 'src/app/core/resolvers/comment/comment-list.resolver';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'burger/home' },
  { 
    path: 'home', 
    component: BurgerHomeComponent, 
    resolve: { topBurgers: BurgerTopResolver } 
  },
  { 
    path: 'menu', 
    component: BurgerMenuComponent, 
    resolve: { menu: BurgerMenuResolver } 
  },
  {
    path: 'details/:id', 
    component: BurgerDetailsComponent, 
    resolve: { burger: BurgerDetailsResolver, comments: CommentListResolver } 
  },
  {
    path: 'create', 
    component: BurgerCreateComponent, 
    canActivate: [AdminGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgerRoutingModule { }

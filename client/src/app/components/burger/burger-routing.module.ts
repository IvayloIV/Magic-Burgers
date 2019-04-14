import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerHomeComponent } from './burger-home/burger-home.component';
import { BurgerTopResolver } from 'src/app/core/resolvers/burger/burger-top.resolver';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BurgerMenuResolver } from 'src/app/core/resolvers/burger/burger-menu.resolver';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { CommentListResolver } from 'src/app/core/resolvers/comment/comment-list.resolver';
import { BurgerCreateComponent } from './burger-create/burger-create.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'burger/home' },
  { path: 'home', component: BurgerHomeComponent, resolve: { topBurgers: BurgerTopResolver } },
  { path: 'menu', component: BurgerMenuComponent, resolve: { menu: BurgerMenuResolver } },
  { 
    path: 'details/:id', 
    component: BurgerDetailsComponent, 
    resolve: { burger: BurgerDetailsResolver, comments: CommentListResolver } 
  },
  { path: 'create', component: BurgerCreateComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgerRoutingModule { }

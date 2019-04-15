import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BurgerRoutingModule } from './burger-routing.module';
import { CommentModule } from '../comment/comment.module';

import { BurgerHomeComponent } from './burger-home/burger-home.component';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BurgerInfoComponent } from './burger-info/burger-info.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerCreateComponent } from './burger-create/burger-create.component';

import { BurgerTopResolver } from 'src/app/core/resolvers/burger/burger-top.resolver';
import { BurgerMenuResolver } from 'src/app/core/resolvers/burger/burger-menu.resolver';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { CommentListResolver } from 'src/app/core/resolvers/comment/comment-list.resolver';

@NgModule({
  declarations: [
    BurgerHomeComponent,
    BurgerListComponent,
    BurgerMenuComponent,
    BurgerInfoComponent,
    BurgerDetailsComponent,
    BurgerCreateComponent
  ],
  imports: [
    CommonModule,
    BurgerRoutingModule,
    NgxPaginationModule,
    CommentModule,
    ReactiveFormsModule
  ],
  providers: [
    BurgerTopResolver,
    BurgerMenuResolver,
    BurgerDetailsResolver,
    CommentListResolver
  ]
})
export class BurgerModule { }

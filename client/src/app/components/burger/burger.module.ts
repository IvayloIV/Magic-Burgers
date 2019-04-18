import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BurgerRoutingModule } from './burger-routing.module';
import { CommentModule } from '../comment/comment.module';

import { BurgerTopResolver } from 'src/app/core/resolvers/burger/burger-top.resolver';
import { BurgerMenuResolver } from 'src/app/core/resolvers/burger/burger-menu.resolver';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { CommentListResolver } from 'src/app/core/resolvers/comment/comment-list.resolver';

import { burgerComponents } from './index';

@NgModule({
  declarations: [
    ...burgerComponents
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

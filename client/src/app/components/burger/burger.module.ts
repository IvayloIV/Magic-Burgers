import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { BurgerHomeComponent } from './burger-home/burger-home.component';
import { BurgerRoutingModule } from './burger-routing.module';

import { BurgerTopResolver } from 'src/app/core/resolvers/burger/burger-top.resolver';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BurgerMenuResolver } from 'src/app/core/resolvers/burger/burger-menu.resolver';
import { BurgerInfoComponent } from './burger-info/burger-info.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerDetailsResolver } from 'src/app/core/resolvers/burger/burger-details.resolver';
import { CommentModule } from '../comment/comment.module';
import { CommentListResolver } from 'src/app/core/resolvers/comment/comment-list.resolver';
import { BurgerCreateComponent } from './burger-create/burger-create.component';
import { ReactiveFormsModule } from '@angular/forms';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CommentModule } from '../comment/comment.module';

import { UserMyProfileResolver } from 'src/app/core/resolvers/user/user-my-profile.resolver';
import { UserAllResolver } from 'src/app/core/resolvers/user/user-all.resolver';
import { UserProfileResolver } from 'src/app/core/resolvers/user/user-profile.resolver';

import { userComponents } from './index';

@NgModule({
  declarations: [
    ...userComponents
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommentModule
  ],
  providers: [
    UserMyProfileResolver,
    UserProfileResolver,
    UserAllResolver
  ]
})
export class UserModule { }

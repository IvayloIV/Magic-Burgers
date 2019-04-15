import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoCommentsComponent } from './user-info-comments/user-info-comments.component';
import { AllUsersComponent } from './all-users/all-users.component';

import { UserMyProfileResolver } from 'src/app/core/resolvers/user/user-my-profile.resolver';
import { UserAllResolver } from 'src/app/core/resolvers/user/user-all.resolver';
import { UserProfileResolver } from 'src/app/core/resolvers/user/user-profile.resolver';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserInfoCommentsComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserMyProfileResolver,
    UserProfileResolver,
    UserAllResolver
  ]
})
export class UserModule { }

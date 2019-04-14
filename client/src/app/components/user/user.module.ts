import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileResolver } from 'src/app/core/resolvers/user/user-profile.resolver';
import { UserInfoCommentsComponent } from './user-info-comments/user-info-comments.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserInfoCommentsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserProfileResolver
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllUsersComponent } from './all-users/all-users.component';

import { UserMyProfileResolver } from 'src/app/core/resolvers/user/user-my-profile.resolver';
import { UserAllResolver } from 'src/app/core/resolvers/user/user-all.resolver';
import { UserProfileResolver } from 'src/app/core/resolvers/user/user-profile.resolver';

const routes: Routes = [
  {
    path: 'profile/my', 
    component: UserProfileComponent,
    resolve: { userProfile: UserMyProfileResolver} 
  },
  {
    path: 'profile/:username', 
    component: UserProfileComponent,
    resolve: { userProfile: UserProfileResolver},
    canActivate: [AdminGuard]
  },
  {
    path: 'all', 
    component: AllUsersComponent,
    resolve: { users: UserAllResolver},
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

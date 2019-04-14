import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileResolver } from 'src/app/core/resolvers/user/user-profile.resolver';

const routes: Routes = [
    { path: 'profile/my', component: UserProfileComponent, resolve: { userProfile: UserProfileResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

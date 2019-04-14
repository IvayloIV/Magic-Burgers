import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { UserService } from '../../services/user.service';
import { UserProfile } from '../../models/user/user-profile.model';
import { GetUserProfile } from 'src/app/store/actions/user.action';

@Injectable()
export class UserProfileResolver implements Resolve<boolean> {
    constructor(
        private userService: UserService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const username = localStorage.getItem('username');
        return this.userService.getUserProfile(username)
            .pipe(tap((data: UserProfile) => {
                this.store.dispatch(new GetUserProfile(data));
            }), mapTo(true));
    }

}

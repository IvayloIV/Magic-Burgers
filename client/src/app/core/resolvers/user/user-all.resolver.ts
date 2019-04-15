import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { UserService } from '../../services/user.service';
import { GetAllUsers } from 'src/app/store/actions/user.action';
import { UserInfo } from '../../models/user/user-info.model';

@Injectable()
export class UserAllResolver implements Resolve<boolean> {
    constructor(
        private userService: UserService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.getAllUsers()
            .pipe(tap((data: UserInfo[]) => {
                this.store.dispatch(new GetAllUsers(data));
            }), mapTo(true));
    }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { UserService } from 'src/app/core/services/user.service';

import { UserInfo } from 'src/app/core/models/user/user-info.model';
import { allUsers } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users$: Observable<UserInfo[]>;

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.store.select(allUsers);
  }

  blockUser(userId: string) {
    this.userService.blockUser(userId).subscribe();
  }
  
  unblockUser(userId: string) {
    this.userService.unblockUser(userId).subscribe();
  }

}

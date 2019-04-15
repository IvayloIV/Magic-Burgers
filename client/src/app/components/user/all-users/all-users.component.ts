import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { UserInfo } from 'src/app/core/models/user/user-info.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users$: Observable<UserInfo[]>;

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.store.select(state => state.user.allUsers);
  }

  blockUser(userId: string) {
    this.userService.blockUser(userId).subscribe();
  }
  
  unblockUser(userId: string) {
    this.userService.unblockUser(userId).subscribe();
  }

}

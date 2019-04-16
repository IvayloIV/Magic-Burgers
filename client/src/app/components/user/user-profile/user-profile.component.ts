import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { UserDetails } from 'src/app/core/models/user/user-details.model';
import { userProfile } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user$: Observable<UserDetails>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select(userProfile);
  }

}

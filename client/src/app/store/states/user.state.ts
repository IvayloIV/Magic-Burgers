import { UserDetails } from 'src/app/core/models/user/user-details.model';
import { UserInfo } from 'src/app/core/models/user/user-info.model';

export interface UserState {
    userProfile: UserDetails;
    allUsers: UserInfo[];
}

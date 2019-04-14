import { Action } from '@ngrx/store';
import { UserProfile } from 'src/app/core/models/user/user-profile.model';

export const GET_USER_PROFILE = '[USER] Profile';

export class GetUserProfile implements Action {
    type: string = GET_USER_PROFILE;
    constructor(public payload: UserProfile) {}
}

export type Type = GetUserProfile;

import { Action } from '@ngrx/store';
import { UserDetails } from 'src/app/core/models/user/user-details.model';
import { UserInfo } from 'src/app/core/models/user/user-info.model';

export const GET_USER_PROFILE = '[USER] Profile';
export const GET_ALL_USERS = '[USER] All';
export const BLOCK_USER = '[USER] Block';
export const UNBLOCK_USER = '[USER] Unblock';

export class GetUserProfile implements Action {
    type: string = GET_USER_PROFILE;
    constructor(public payload: UserDetails) {}
}

export class GetAllUsers implements Action {
    type: string = GET_ALL_USERS;
    constructor(public payload: UserInfo[]) {}
}

export class BlockUser implements Action {
    type: string = BLOCK_USER;
    constructor(public payload: string) {}
}

export class UnblockUser implements Action {
    type: string = UNBLOCK_USER;
    constructor(public payload: string) {}
}

export type Type = GetUserProfile | GetAllUsers | BlockUser | UnblockUser;

import { UserState } from '../states/user.state';
import * as UserAction from '../actions/user.action';

const initialState: UserState = {
    userProfile: null,
};

function setUserProfile(state: UserState, payload) {
    return Object.assign({}, state, { 
        userProfile: payload
    });
}

export function userReducer(
    state: UserState = initialState,
    action: UserAction.Type
) {
    switch (action.type) {
        case UserAction.GET_USER_PROFILE:
            return setUserProfile(state, action.payload);
        default:
            return state;
    }
}

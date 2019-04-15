import { UserState } from '../states/user.state';
import * as UserAction from '../actions/user.action';

const initialState: UserState = {
    userProfile: null,
    allUsers: []
};

function setUserProfile(state: UserState, payload) {
    return Object.assign({}, state, { 
        userProfile: payload
    });
}

function setAllUsers(state: UserState, payload) {
    return Object.assign({}, state, { 
        allUsers: payload
    });
}

function blockUser(state: UserState, payload) {
    const users = getNewUsers(state,payload, true);
    return Object.assign({}, state, { 
        allUsers: users
    });
}

function unblockUser(state: UserState, payload) {
    const users = getNewUsers(state,payload, false);
    return Object.assign({}, state, { 
        allUsers: users
    });
}

function getNewUsers(state: UserState, payload, blocked: boolean) {
    const users = [];

    for (let user of state.allUsers) {
        if (user._id === payload) {
            users.push(Object.assign({}, user, { blocked }));
        } else {
            users.push(user);
        }
    }

    return users;
}

export function userReducer(
    state: UserState = initialState,
    action: UserAction.Type
) {
    switch (action.type) {
        case UserAction.GET_USER_PROFILE:
            return setUserProfile(state, action.payload);
        case UserAction.GET_ALL_USERS:
            return setAllUsers(state, action.payload);
        case UserAction.BLOCK_USER:
            return blockUser(state, action.payload);
        case UserAction.UNBLOCK_USER:
            return unblockUser(state, action.payload);
        default:
            return state;
    }
}

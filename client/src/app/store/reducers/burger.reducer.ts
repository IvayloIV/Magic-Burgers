import { BurgerState } from "../states/burger.state";
import * as BurgerAction from '../actions/burger.action';
import * as CommentAction from '../actions/comment.action';

const initialState: BurgerState = {
    topBurgers: null,
    burgers: [],
    burgerDetails: null
};

function setTopBurgers(state: BurgerState, payload) {
    return Object.assign({}, state, { 
        topBurgers: payload
    });
}

function setBurgers(state: BurgerState, payload) {
    return Object.assign({}, state, { 
        burgers: payload
    });
}

function setBurgerDetails(state: BurgerState, payload) {
    return Object.assign({}, state, { 
        burgerDetails: payload
    });
}

function addNewComment(state: BurgerState, payload) {
    let comments = state.burgerDetails.comments.slice();
    comments.push(payload._id);
    return Object.assign({}, state, { 
        burgerDetails: Object.assign({}, state.burgerDetails, { comments })
    });
}

function removeComment(state: BurgerState, payload) {
    let comments = state.burgerDetails.comments.filter(c => c !== payload);
    return Object.assign({}, state, {
        burgerDetails: Object.assign({}, state.burgerDetails, { comments })
    });
}

function likeBurger(state: BurgerState, payload) {
    let likes = state.burgerDetails.likes.slice();
    likes.push(payload);
    return Object.assign({}, state, { 
        burgerDetails: Object.assign({}, state.burgerDetails, { likes })
    });
}

function dislikeBurger(state: BurgerState, payload) {
    let likes = state.burgerDetails.likes.filter(c => c !== payload);
    return Object.assign({}, state, {
        burgerDetails: Object.assign({}, state.burgerDetails, { likes })
    });
}

export function burgerReducer(
    state: BurgerState = initialState,
    action: BurgerAction.Type
) {
    switch (action.type) {
        case BurgerAction.GET_TOP_BURGERS:
            return setTopBurgers(state, action.payload);
        case BurgerAction.GET_MENU_BURGERS:
            return setBurgers(state, action.payload);
        case BurgerAction.GET_BURGER_DETAILS:
            return setBurgerDetails(state, action.payload);
        case CommentAction.CREATE_COMMENT:
            return addNewComment(state, action.payload);
        case CommentAction.REMOVE_COMMENT:
            return removeComment(state, action.payload);
        case BurgerAction.LIKE_BURGER:
            return likeBurger(state, action.payload);
        case BurgerAction.DISLIKE_BURGER:
            return dislikeBurger(state, action.payload);
        default:
            return state;
    }
}

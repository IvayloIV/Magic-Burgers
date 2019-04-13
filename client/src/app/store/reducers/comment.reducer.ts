import { CommentState } from "../states/comment.state";
import * as CommentAction from '../actions/comment.action';

const initialState: CommentState = {
    comments: [],
};

function setComments(state: CommentState, payload) {
    return Object.assign({}, state, { 
        comments: payload
    });
}

function addNewComment(state: CommentState, payload) {
    return Object.assign({}, state, { 
        comments: [payload, ...state.comments]
    });
}

function removeComment(state: CommentState, payload) {
    return Object.assign({}, state, { 
        comments: state.comments.filter(c => c._id !== payload)
    });
}

export function commentReducer(
    state: CommentState = initialState,
    action: CommentAction.Type
) {
    switch (action.type) {
        case CommentAction.GET_ALL_COMMENTS:
            return setComments(state, action.payload);
        case CommentAction.CREATE_COMMENT:
            return addNewComment(state, action.payload);
        case CommentAction.REMOVE_COMMENT:
            return removeComment(state, action.payload);
        default:
            return state;
    }
}

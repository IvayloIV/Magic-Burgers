import { Action } from '@ngrx/store';
import { CommentInfo } from 'src/app/core/models/comment/comment-info.model';
import { CommentCreate } from 'src/app/core/models/comment/comment-create.model';

export const GET_ALL_COMMENTS = '[COMMENT] All';
export const CREATE_COMMENT = '[COMMENT] Create';
export const REMOVE_COMMENT = '[COMMENT] REMOVE';

export class GetAllComments implements Action {
    type: string = GET_ALL_COMMENTS;
    constructor(public payload: CommentInfo[]) {}
}

export class CreateComment implements Action {
    type: string = CREATE_COMMENT;
    constructor(public payload: CommentCreate) {}
}

export class RemoveComment implements Action {
    type: string = REMOVE_COMMENT;
    constructor(public payload: string) {}
}

export type Type = GetAllComments | CreateComment | RemoveComment;

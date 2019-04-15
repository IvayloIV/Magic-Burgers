import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { CreateComment, RemoveComment } from 'src/app/store/actions/comment.action';
import { CommentInfo } from '../models/comment/comment-info.model';

const BASE_URL = 'http://localhost:5000/comment/';
const ALL_COMMENTS_URL = BASE_URL + 'all/'
const COMMENT_CREATE_URL = BASE_URL + 'create/'
const COMMENT_REMOVE_URL = BASE_URL + 'remove/'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllComments(burgerId: string): Observable<CommentInfo[]> {
    return this.http.get<CommentInfo[]>(ALL_COMMENTS_URL + burgerId);
  }

  createComment(burgerId: string, comment: CommentInfo) {
    return this.http.post(COMMENT_CREATE_URL + burgerId, comment)
      .pipe(tap((data) => {
        this.store.dispatch(new CreateComment(data['comment']))
      }));
  }

  removeComment(commentId: string) {
    return this.http.delete(COMMENT_REMOVE_URL + commentId)
      .pipe(tap(() => {
        this.store.dispatch(new RemoveComment(commentId));
      }));
  }
}

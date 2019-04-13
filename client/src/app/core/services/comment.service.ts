import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentInfo } from '../models/comment/comment-info.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { CreateComment, RemoveComment } from 'src/app/store/actions/comment.action';

const BASE_URL = 'http://localhost:5000/comment/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllComments(burgerId: string): Observable<CommentInfo[]> {
    return this.http.get<CommentInfo[]>(BASE_URL + `all/${burgerId}`);
  }

  createComment(burgerId: string, comment: CommentInfo) {
    return this.http.post(BASE_URL + `create/${burgerId}`, comment)
      .pipe(tap((data) => {
        this.store.dispatch(new CreateComment(data['comment']))
      }));
  }

  removeComment(commentId: string) {
    return this.http.delete(BASE_URL + `remove/${commentId}`)
      .pipe(tap(() => {
        this.store.dispatch(new RemoveComment(commentId));
      }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { CommentInfo } from 'src/app/core/models/comment/comment-info.model';
import { CommentService } from 'src/app/core/services/comment.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments$: Observable<CommentInfo[]>;
  userId: string;
  isAdmin: boolean;

  constructor(
    private store: Store<AppState>,
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.comments$ = this.store.select(state => state.comment.comments);
    this.userId = localStorage.getItem('userId');
    this.isAdmin = this.authService.isAdmin();
  }

  removeComment(commentId: string) {
    this.commentService.removeComment(commentId).subscribe();
  }

}

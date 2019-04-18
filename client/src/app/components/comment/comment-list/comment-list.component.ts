import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppState } from 'src/app/store/app.state';
import { CommentService } from 'src/app/core/services/comment.service';
import { CommentInfo } from 'src/app/core/models/comment/comment-info.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { comments } from 'src/app/store/selectors/comment.selector';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  animations: [
    trigger('commentShow', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-200px)'
        }),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({
          transform: 'translateX(200px)',
          opacity: 0
        }))
      ])
    ])
  ]
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
    this.comments$ = this.store.select(comments);
    this.userId = localStorage.getItem('userId');
    this.isAdmin = this.authService.isAdmin();
  }

  removeComment(commentId: string) {
    this.commentService.removeComment(commentId).subscribe();
  }

}

import { Component, Input } from '@angular/core';
import { CommentInfo } from 'src/app/core/models/comment/comment-info.model';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  @Input() comment: CommentInfo;
}
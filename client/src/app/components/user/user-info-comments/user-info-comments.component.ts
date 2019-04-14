import { Component, Input } from '@angular/core';
import { CommentInfo } from 'src/app/core/models/comment/comment-info.model';

@Component({
  selector: 'app-user-info-comments',
  templateUrl: './user-info-comments.component.html',
  styleUrls: ['./user-info-comments.component.css']
})
export class UserInfoCommentsComponent {
  @Input() comment: CommentInfo;
}
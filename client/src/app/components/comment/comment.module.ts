import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentListComponent,
    CommentCreateComponent
  ]
})
export class CommentModule { }

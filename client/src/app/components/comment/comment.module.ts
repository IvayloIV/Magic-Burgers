import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

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

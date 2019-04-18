import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { commentComponents } from './index';

@NgModule({
  declarations: [
    ...commentComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ...commentComponents
  ]
})
export class CommentModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(40)]],
      rating: ['1', [Validators.min(1), Validators.max(5)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  createComment() {
    const payload = this.form.value;
    const id = this.route.snapshot.params['id'];

    this.commentService.createComment(id, payload)
      .subscribe(() => {
        this.form.reset();
        this.form.get('rating').setValue(1);
      });
  }

}

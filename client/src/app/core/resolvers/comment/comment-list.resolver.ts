import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { CommentService } from '../../services/comment.service';
import { CommentInfo } from '../../models/comment/comment-info.model';
import { GetAllComments } from 'src/app/store/actions/comment.action';

@Injectable()
export class CommentListResolver implements Resolve<boolean> {
    constructor(
        private commentService: CommentService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const id = route.params['id'];
        return this.commentService.getAllComments(id)
            .pipe(tap((data: CommentInfo[]) => {
                this.store.dispatch(new GetAllComments(data));
            }), mapTo(true));
    }

}

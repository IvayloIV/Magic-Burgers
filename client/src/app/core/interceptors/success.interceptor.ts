import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'

const USER_LOGIN = '/user/login';
const USER_REGISTER = '/user/register';
const USER_BLOCK = '/user/block';
const USER_UNBLOCK = '/user/unblock';

const COMMENT_CREATE = '/comment/create';
const COMMENT_REMOVE = '/comment/remove';

const BURGER_LIKE = '/burger/like';
const BURGER_DISLIKE = '/burger/dislike';
const BURGER_CREATE = '/burger/create';

const ORDER_CREATE = '/order/create';
const ORDER_EDIT = '/order/edit';

const TOPPING_CREATE = '/topping/create';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor (
        private route: Router,
        private toastr: ToastrService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (req.url.endsWith(USER_LOGIN)) {
                    this.successResponse('Login success.', '/burger/home');
                } else if (req.url.endsWith(USER_REGISTER)) {
                    this.successResponse('Register success.', '/auth/login');
                } else if (req.url.indexOf(COMMENT_CREATE) !== -1) {
                    this.toastr.success('Comment created.');
                } else if (req.url.indexOf(COMMENT_REMOVE) !== -1) {
                    this.toastr.success('Comment removed.');
                } else if (req.url.indexOf(BURGER_LIKE) !== -1) {
                    this.toastr.success('Burger liked success.');
                } else if (req.url.indexOf(BURGER_DISLIKE) !== -1) {
                    this.toastr.success('Burger disliked success.');
                } else if (req.url.indexOf(ORDER_CREATE) !== -1) {
                    this.successResponse('Order created success.', '/order/my');
                } else if (req.url.endsWith(BURGER_CREATE)) {
                    this.successResponse('Burger created success.', '/burger/menu');
                } else if (req.url.endsWith(TOPPING_CREATE)) {
                    this.successResponse('Topping created success.', '/topping/list');
                } else if (req.url.indexOf(USER_BLOCK) !== -1) {
                    this.toastr.success('User blocked successful.');
                } else if (req.url.indexOf(USER_UNBLOCK) !== -1) {
                    this.toastr.success('User unblocked successful.');
                } else if (req.url.indexOf(ORDER_EDIT) !== -1) {
                    this.successResponse('Order edited successful.', '/order/all');
                }
            }
        }));
    }

    private successResponse(message: string, url: string) {
        this.toastr.success(message);
        this.route.navigate([url]);
    }
}

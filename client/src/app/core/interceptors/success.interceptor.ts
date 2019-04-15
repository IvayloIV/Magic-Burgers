import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SuccessInterceptor implements HttpInterceptor {
    constructor (
        private route: Router,
        private toastr: ToastrService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                if (req.url.endsWith('/user/login')) {
                    this.toastr.success('Login success');
                    this.route.navigate(['/burger/home']);
                } else if (req.url.endsWith('/user/register')) {
                    this.toastr.success('Register success');
                    this.route.navigate(['/auth/login']);
                } else if (req.url.indexOf('/comment/create') !== -1) {
                    this.toastr.success('Comment created.');
                } else if (req.url.indexOf('/comment/remove') !== -1) {
                    this.toastr.success('Comment removed.');
                } else if (req.url.indexOf('/burger/like') !== -1) {
                    this.toastr.success('Burger liked success.');
                } else if (req.url.indexOf('/burger/dislike') !== -1) {
                    this.toastr.success('Burger disliked success.');
                } else if (req.url.indexOf('/order/create') !== -1) {
                    this.toastr.success('Order created success.');
                    this.route.navigate(['/order/my']);
                } else if (req.url.endsWith('/burger/create')) {
                    this.toastr.success('Burger created success.');
                    this.route.navigate(['/burger/menu']);
                } else if (req.url.endsWith('/topping/create')) {
                    this.toastr.success('Topping created success.');
                    this.route.navigate(['/topping/list']);
                } else if (req.url.indexOf('/user/block') !== -1) {
                    this.toastr.success('User blocked successful.');
                } else if (req.url.indexOf('/user/unblock') !== -1) {
                    this.toastr.success('User unblocked successful.');
                } else if (req.url.indexOf('/order/edit') !== -1) {
                    this.toastr.success('Order edited successful.');
                    this.route.navigate(['/order/all']);
                }
            }
        }));
    }
}

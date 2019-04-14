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
                }
            }
        }));
    }
}

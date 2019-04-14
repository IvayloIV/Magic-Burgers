import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.authService.isAdmin()) {
            return true;
        }

        this.toastr.error('You are not admin.');
        this.router.navigate(['/burger/home']);
        return false;
    }
}

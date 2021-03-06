import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../api/index';

@Injectable()
export class TeacherAuthGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}

  canActivate() {
    if (this.apiService.user && this.apiService.user.userRole && this.apiService.user.userRole.name === 'teacher') {
      return true;
    } else {
      console.log('ik ben niet authenticated');
      this.router.navigate(['/home']);
      return false;
    }
  }
}

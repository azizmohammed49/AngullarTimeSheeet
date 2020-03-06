import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailGuard implements CanActivate {

  constructor(private router: Router)
  {

  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id =+next.url[1].path;
      if(isNaN(id) || id < 1) {
        alert("Invalid Employee Id");
        this.router.navigate(['/employee']);
        return false;
      };
      return true;
    }   
}

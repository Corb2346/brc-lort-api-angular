import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private LoginService:LoginService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.LoginService.getauth() == 'true' ){

        console.log("chece en el localstorage");
        return true;
      }
      console.log("canload",false);
      console.log(route);
      this.router.navigate(['login'])
    
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.LoginService.getauth() === 'true' ){

        console.log("chece en el localstorage");
        return true;
      }
      console.log("canload",false);
      console.log(route);
      console.log(segments);
      this.router.navigate(['login'])

    return false;
  }
}

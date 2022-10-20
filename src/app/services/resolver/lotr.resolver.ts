import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetDataService } from '../get-data.service';


@Injectable({
  providedIn: 'root'
})
export class LotrResolver implements Resolve<boolean> {


  constructor(private GetDataService:GetDataService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    

    return this.GetDataService.getbooks();
   

  }
}
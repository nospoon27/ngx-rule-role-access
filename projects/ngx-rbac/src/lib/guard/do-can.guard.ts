import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { GlobalRulesService } from '../service/global-rules.service';
import { Observable } from 'rxjs';

@Injectable()
export class DoCanGuard implements CanActivate {
  constructor(private guardRulesService: GlobalRulesService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.guardRulesService.can(route.data.roles);
  }
}

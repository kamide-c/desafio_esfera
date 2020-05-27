import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Injectable()
export class UsersResolver implements Resolve<User[]> {

  constructor(private usersService: UsersService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.usersService.getUsers();
  }
}

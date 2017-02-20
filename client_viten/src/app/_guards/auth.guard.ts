import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { AuthenticationService } from '../_services/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  /**
   * Defines a time 20 min before the JWT rottens
   * @return {Date} 20 min before rotten JWT
   */
  getAlarmtime() {
    let token = localStorage.getItem('token');
    let expDate = this.jwtHelper.getTokenExpirationDate(token);

    return new Date(expDate.getTime()*1000 - 20 * 60000);     // 20 min before expDate
  }

  /**
   * [canActivate description]
   * @return {[type]} [description]
   */
  canActivate() {
    if (localStorage.getItem('token')) {
      // User might be loged in
      let alarmTime = this.getAlarmtime()
      if (alarmTime.getTime() < (new Date().getTime()*1000)){
        // check if JWT can be renewed
        this.authenticationService.getNewJWT()
            .subscribe(result => {
              if (result === true) {
                return true;
              } else {
                this.router.navigate(['/login']);
                return false;
              }
            })
      } else {
        return true;
      }
    } else {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }


  }
}
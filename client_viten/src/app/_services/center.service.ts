import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { JwtHelper } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { User } from '../_models/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class CenterService {


  /**
   * Constructor
   */
  constructor(
    private http: Http,
    private router: Router ) {
  }

  getAllCenters(): Observable<any> {
      return this.http.get(environment.URL.allCenters)
      .map(
        response => {
          return response.json();
        },
        error => {
          console.log(error.text());
          return null;
        }
      );
  }



  /**
   * Requests to exit a survey
   * @param  {string}              password The password that is to match the exit survey password
   * @return {Observable<boolean>}          The server's response, as an Observable
   */
  exitSurvey(password: string, centerId: string): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(environment.URL.exitSurvey + '/' + centerId, {password: password}, options)
    .map( response => {
      return response.json().success || false;
    },
    error => {
      return false;
    });
  }

  /**
   * Requests to change the exit-survey password
   * @param  {string}              password The new exit-survey password
   * @return {Observable<boolean>}          The server's response, as an Observable
   */
  exitSurveyUpdatePassword(password: string, centerId: string): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${localStorage.getItem('token')}`);
    const options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.patch(environment.URL.exitSurvey + '/' + centerId, {password: password}, options)
    .map( response => {
      return true;
    },
    error => {
      return false;
    });
  }

  centerUpdateCenterName(name: string): Observable<boolean> {
    const token = this.getToken();
    const headers = new Headers({'content-type': 'application/json'});
    headers.append('Authorization', `${token}`);
    const options = new RequestOptions({ headers: headers });
    const data = { 'name': name };
      return this.http.post(environment.URL.newPassword, JSON.stringify(data), options)
      .map(
        response => {
          return true;
        },
        error => {
          console.log(error.text());
          return false;
        }
      );
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  public loginAPI = 'rest/api/security/login';
  public logOutAPI = 'rest/api/security/logout';
  constructor(private http: HttpClient) { }

  getLogin(user): Observable<any> {
    return this.http.post(environment.rootURL + this.loginAPI, user).map((res: Response) => {
      const data = res.json();
      return data;
    }).catch((res: Response) => {
      const data = res.json();
      return Observable.throw(data);
    });
  }
  logOut() {
    return this.http.get(environment.rootURL + this.logOutAPI).map((res: Response) => {
      const data = res.json();

      return data;
    }).catch((res: Response) => {
      const data = res.json();
      return Observable.throw(data);
    });
  }
}

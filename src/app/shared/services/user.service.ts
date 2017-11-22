import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ConfigService } from './config.service';
import {User} from '../models/';

/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  private API_URL: string;

  constructor(
      private configService: ConfigService,
      private _http: Http,
    //   private _api: APIService,
      private _store: Store<any>) {
        this.API_URL = this.configService.get('API_URL');
      }

  userLogout() {
    this.currentUser.next(null);
  }

  authHeaders(token) {
    const headers = new Headers({
      'x-access-token': token,
      'Content-Type': 'application/json'
    });
    return new RequestOptions({ headers: headers });
  }

  getUsers() {
    return this._http.get('./assets/db/users.json')
      .map((res: Response) => res.json())
      .subscribe(res => {
        res.map(user => this._store.dispatch({ type: '[User] Add User', payload: user }));
      });
  }

  // for prod
//   getUser(session){
//     return this._http.get(this._api.url + 'users/' + session['user'], this.authHeaders(session['token']))
//       .map((res: Response) => res.json())
//       .subscribe(res => this.currentUser.next(res));
//   }

}

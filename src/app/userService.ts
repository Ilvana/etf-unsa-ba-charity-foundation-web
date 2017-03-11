import {Injectable}              from '@angular/core';
import {Http, Response, Headers, RequestOptions}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from "./user";
import {userInfo} from "os";
import {error} from "util";

@Injectable()
export class UserService {
  private userUrl = '/api/user';

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map((res:Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'));
  }

  addUser(body: Object): Observable<User> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.userUrl, bodyString, options)
      .map((res: Response)=>res.json)
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'));
  }

  removeUser(id: String) :Observable<User> {
    return this.http.delete(`${this.userUrl}/${id}`)
      .map((res: Response)=>res.json())
      .catch(error=>Observable.throw(error.json().error || 'Server error'));
  }
}

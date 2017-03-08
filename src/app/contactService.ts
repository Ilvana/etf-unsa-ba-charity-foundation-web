import {Injectable} from "@angular/core";
import {Contact} from "./contact";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class ContactService{
  private contactUrl = "/api/contact";

  constructor(private http: Http) {
  }

  sendEmail (body: Object): Observable<Contact> {
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.contactUrl, bodyString, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

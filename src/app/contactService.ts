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
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.contactUrl, bodyString, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}

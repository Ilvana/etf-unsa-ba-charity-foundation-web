import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CommentService {

  private commentUrl = "/api/comment";

  constructor(private http: Http) {
  }

  addComment(body: Object): Observable<Comment> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.commentUrl, bodyString, options)
      .map((res: Response)=>res.json)
      .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
  }
}

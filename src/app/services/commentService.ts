import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CommentService {

  private commentUrl = "/api/comment";

  constructor(private http: Http) {
  }

  addComment(body: Object): Observable<Comment> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.commentUrl, bodyString, options)
      .map((res: Response)=>res.json)
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }

  getComments(): Observable<Comment[]> {
    return this.http.get(this.commentUrl)
      .map((res: Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }

  removeComment(id: String): Observable<Comment> {
    return this.http.delete(`${this.commentUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }
}

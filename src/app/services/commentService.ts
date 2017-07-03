import {Injectable} from "@angular/core";
import {Comment} from "../models/comment";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CommentService {

  private commentUrl = "/api/comment";

  private announcementUrl = "/api/announcement";

  constructor(private http: Http) {
  }

  addComment(id: String, body: Object): Observable<Comment> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${this.announcementUrl}/${id}/comment`, bodyString, options)
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

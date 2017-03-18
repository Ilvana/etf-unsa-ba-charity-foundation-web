import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Announcement} from "../announcement";

@Injectable()
export class AnnouncementService {

  private announcementUrl = "/api/announcement";

  constructor(private http: Http) {
  }

  addAnnouncement(body: Object): Observable<Announcement> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.announcementUrl, bodyString, options)
      .map((res: Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get(this.announcementUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeAnnouncement(id: String): Observable<Announcement> {
    return this.http.delete(`${this.announcementUrl}/${id}`)
      .map((res: Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }

  getAnnouncementById(id: String): Observable<Announcement> {
    return this.http.get(`${this.announcementUrl}/${id}`)
      .map((res: Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json().error || 'Server error'))
  }
}

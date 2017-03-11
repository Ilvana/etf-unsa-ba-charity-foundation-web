import {Injectable} from "@angular/core";
import {Http, Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Announcement} from "./announcement";

@Injectable()
export class AnnouncementService {

  private announcementUrl = "/api/announcement";

  constructor(private http: Http) {
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
}

import {Component, OnInit} from "@angular/core";
import {AnnouncementService} from "../services/announcementService";
import {Announcement} from "../models/announcement";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class HomeComponent implements OnInit{
  announcements: Announcement[];
  mode = 'Observable';

  constructor(private announcementService: AnnouncementService) {
  }

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(announcements=>this.announcements = announcements, err => {
      console.log(err);
    });
  }
}

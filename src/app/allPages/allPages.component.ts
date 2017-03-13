import {Component, OnInit} from "@angular/core";
import {Announcement} from "../announcement";
import {AnnouncementService} from "../services/announcementService";

@Component({
  selector: 'allPages-component',
  templateUrl: './allPages.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class AllPagesComponent implements OnInit {
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

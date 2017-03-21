import {Component, OnInit} from "@angular/core";
import {Announcement} from "../announcement";
import {AnnouncementService} from "../services/announcementService";
import {PagerService} from "../util/pager.service";

@Component({
  selector: 'allPages-component',
  templateUrl: './allPages.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class AllPagesComponent implements OnInit {
  announcements: Announcement[];
  mode = 'Observable';
  pager: any = {};
  pagedItems: Announcement[];

  constructor(private announcementService: AnnouncementService, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(announcements=> {
      this.announcements = announcements;
      this.setPage(1);
    }, err => {
      console.log(err);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.announcements.length, page);
    this.pagedItems = this.announcements.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

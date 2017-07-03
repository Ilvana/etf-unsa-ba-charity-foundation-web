import {Component, OnInit} from "@angular/core";
import {CommentService} from "../services/commentService";
import {AnnouncementService} from "../services/announcementService";
import {Announcement} from "../models/announcement";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../models/comment";

@Component({
  selector: 'singlePage-component',
  templateUrl: './singlePage.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class SinglePageComponent implements OnInit {
  private model = new Comment(1, '', new Date(), 1, 1);
  comment: Comment;
  private announcement: Announcement;
  private sub: any;

  constructor(private commentService: CommentService, private announcementService: AnnouncementService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.announcementService.getAnnouncementById(id).subscribe(announcement=>this.announcement = announcement);
    });

  }

  addComment() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.commentService.addComment(id, this.model).subscribe(comment=>this.comment = comment, err => {
        console.log(err);
      });
    })
  }
}

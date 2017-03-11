import {Component, OnInit} from "@angular/core";
import {User} from "../user";
import {UserService} from "../userService";
import {AnnouncementService} from "../announcementService";
import {Announcement} from "../announcement";
import {CommentService} from "../commentService";


@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class AdminComponent implements OnInit {
  users: User[];
  announcements: Announcement[];
  comments: Comment[];
  user: User;
  announcement: Announcement;
  comment: Comment;

  constructor(private userService: UserService, private announcementService: AnnouncementService, private commentService: CommentService) {
  }

  ngOnInit() {
    this.getAllUsers();
    this.getAllAnnouncements();
    this.getAllComments();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(users=>this.users = users, err=> {
      console.log(err)
    })
  }

  getAllAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(announcements=>this.announcements = announcements, err=> {
      console.log(err);
    })
  }

  getAllComments() {
    this.commentService.getComments().subscribe(comments=>this.comments = comments, err=> {
      console.log(err)
    })
  }

  removeUser(id: String) {
    this.userService.removeUser(id).subscribe(user=>this.user = user, err=> {
      console.log(err)
    })
  }

  removeAnnouncement(id: String) {
    this.announcementService.removeAnnouncement(id).subscribe(annoucement=>this.announcement = annoucement, err=> {
      console.log(err)
    })
  }

  removeComment(id: String) {
    this.commentService.removeComment(id).subscribe(comment=>this.comment = comment, err=> {
      console.log(err)
    })
  }
}

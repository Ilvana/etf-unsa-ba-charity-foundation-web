import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/userService";
import {AnnouncementService} from "../services/announcementService";
import {Announcement} from "../announcement";
import {CommentService} from "../services/commentService";


@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class AdminComponent implements OnInit {
  private model = new User(1, '', '', '', 1, '', '');
  private modelAnnoucement = new Announcement(1, '', '', '', 2, '');
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

  addUser() {
    this.userService.addUser(this.model).subscribe(user=>this.user = user, err=> {
      console.log(err);
    });
  }

  addAnnouncement() {
    this.announcementService.addAnnouncement(this.modelAnnoucement).subscribe(announcement=>this.announcement = announcement, err=> {
      console.log(err)
    })
  }

  editAnnouncement(id: String) {
    this.announcementService.getAnnouncementById(id).subscribe(modelAnnoucement=>this.modelAnnoucement = modelAnnoucement, err=> {
      console.log(err)
    })
  }
}

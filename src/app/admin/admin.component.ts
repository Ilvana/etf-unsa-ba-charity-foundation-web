import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/userService";
import {AnnouncementService} from "../services/announcementService";
import {Announcement} from "../models/announcement";
import {Comment} from "../models/comment";
import {CommentService} from "../services/commentService";
import {AuthenticationService} from "../services/authentificationService";
import {PagerService} from "../util/pager.service";

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css'],
  providers: [AuthenticationService]
})

export class AdminComponent implements OnInit {
  private model = new User(1, '', '', '', 1, '', '', 1);
  private modelAnnoucement = new Announcement(1, '', '', '', 221212, '', '');
  users: User[];
  announcements: Announcement[];
  comments: Comment[];
  user: User;
  announcement: Announcement;
  comment: Comment;
  showEditButton: boolean;
  showEditButtonUsers: boolean;
  pagerUsers: any = {};
  pagedUsers: User[];
  pagerComments: any = {};
  pagedComments: Comment[];
  pager: any = {};
  pagedAnnouncements: Announcement[];

  constructor(private userService: UserService, private announcementService: AnnouncementService, private commentService: CommentService, private authentificationService: AuthenticationService, private pagerService: PagerService) {
    this.showEditButton = false;
    this.showEditButtonUsers = false;
  }

  ngOnInit() {
    this.authentificationService.checkCredentials();
    this.getAllUsers();
    this.getAllAnnouncements();
    this.getAllComments();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.setUsersPage(1);
      },
      err => {
        console.log(err)
      })
  }

  getAllAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(announcements => {
      this.announcements = announcements;
      this.setPage(1);
    }, err => {
      console.log(err);
    });
  }

  getAllComments() {
    this.commentService.getComments().subscribe(comments => {
        this.comments = comments;
        this.setCommentsPage(1);
      },
      err => {
        console.log(err)
      })
  }

  removeUser(id: String) {
    this.userService.removeUser(id).subscribe(user => this.user = user, err => {
      console.log(err)
    })
  }

  removeAnnouncement(id: String) {
    this.announcementService.removeAnnouncement(id).subscribe(annoucement => this.announcement = annoucement, err => {
      console.log(err)
    })
  }

  removeComment(id: String) {
    this.commentService.removeComment(id).subscribe(comment => this.comment = comment, err => {
      console.log(err)
    })
  }

  addUser() {
    this.userService.addUser(this.model).subscribe(user => this.user = user, err => {
      console.log(err);
    });
  }

  addAnnouncement() {
    this.announcementService.addAnnouncement(this.modelAnnoucement).subscribe(announcement => this.announcement = announcement, err => {
      console.log(err)
    })
  }

  getAnnouncement(id: String) {
    this.showEditButton = true;
    this.announcementService.getAnnouncementById(id).subscribe(modelAnnoucement => this.modelAnnoucement = modelAnnoucement, err => {
      console.log(err)
    })
  }

  editAnnouncement() {
    this.showEditButton = false;
    this.announcementService.updateAnnouncement(this.modelAnnoucement).subscribe(announcement => this.announcement = announcement, err => {
      console.log(err)
    })
    this.modelAnnoucement = new Announcement(1, '', '', '', 221212, '', '');
  }

  getUser(id: String) {
    this.showEditButtonUsers = true;
    this.userService.getUserById(id).subscribe(model => this.model = model, err => {
      console.log(err)
    })
  }

  editUser() {
    this.showEditButtonUsers = false;
    this.userService.updateUser(this.model).subscribe(user => this.user = user, err => {
      console.log(err)
    })
    this.model = new User(1, '', '', '', 1, '', '', 1);
  }

  logout() {
    this.authentificationService.logout();
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.announcements.length, page);
    this.pagedAnnouncements = this.announcements.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setUsersPage(page: number) {
    if (page < 1 || page > this.pagerUsers.totalPages) {
      return;
    }

    this.pagerUsers = this.pagerService.getPager(this.users.length, page);
    this.pagedUsers = this.users.slice(this.pagerUsers.startIndex, this.pagerUsers.endIndex + 1);
  }

  setCommentsPage(page: number) {
    if (page < 1 || page > this.pagerComments.totalPages) {
      return;
    }

    this.pagerComments = this.pagerService.getPager(this.comments.length, page);
    this.pagedComments = this.comments.slice(this.pagerComments.startIndex, this.pagerComments.endIndex + 1);
  }
}

import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../userService";

@Component({
  selector: 'contact-component',
  templateUrl:'./contact.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class ContactComponent implements OnInit{
  errorMessage: string;
  users: User[];
  mode = 'Observable';

  constructor (private userService: UserService) {}

  ngOnInit() { this.getUsers(); }

  getUsers(){
    this.userService.getUsers().subscribe(users=>this.users=users, error=>this.errorMessage=<any>error);
  }
}





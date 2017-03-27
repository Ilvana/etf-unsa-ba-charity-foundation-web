import {Component} from "@angular/core";
import {AuthenticationService, UserAuth} from "../services/authentificationService";
import {UserService} from "../services/userService";
import {User} from "../models/user";

@Component({
  selector: "login-form",
  templateUrl: "login.component.html",
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css'],
  providers: [ AuthenticationService ]
})

export class LoginComponent {

  public user = new UserAuth('', '');
  public errorMsg = '';
  users: User[];

  constructor(private _service: AuthenticationService, private userService: UserService) {
    this.userService.getUsers().subscribe(users=>this.users = users);
  }

  login() {
    if (!this._service.login(this.user, this.users)) {
      this.errorMsg = 'Failed to login';
    }
  }
}

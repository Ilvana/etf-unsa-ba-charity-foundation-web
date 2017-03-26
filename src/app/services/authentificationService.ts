import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "./userService";
import {User} from "../models/user";

export class UserAuth {
  constructor(public username: string,
              public password: string) {
  }
}

// var users = [
//   new UserAuth('admin@admin.com', 'adm9'),
//   new UserAuth('user1@gmail.com', 'a23')
// ];


@Injectable()
export class AuthenticationService {

  constructor(private _router: Router) {
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }

  login(user, users) {
    var authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['/admin']);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
}

import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

export class UserAuth {
  constructor(public username: string,
              public password: string) {
  }
}

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

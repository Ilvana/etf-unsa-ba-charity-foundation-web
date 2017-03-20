import {Component} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/userService";

@Component({
  selector: 'registation-component',
  templateUrl: './registation.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class RegistrationComponent {
  private model = new User(1, '', '', '', 1, '', '');
  user: User;

  constructor(private userService: UserService) {
  }

  registerUser() {
    this.userService.registerUser(this.model).subscribe(user=>this.user = user, err=> {
      console.log(err);
    });
  }
}

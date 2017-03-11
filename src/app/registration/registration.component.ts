import {Component} from "@angular/core";
import {User} from "../user";
import {UserService} from "../userService";

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

  addUser() {
    this.userService.addUser(this.model).subscribe(user=>this.user = user, err=> {
      console.log(err);
    });
  }
}

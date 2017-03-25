import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector:'login-form',
  templateUrl: "login.component.html",
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({username, password});
    this.http.post('http://localhost:3001/sessions/create', body, {headers: contentHeaders})
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['admin']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}

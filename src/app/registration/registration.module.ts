import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/userService";
import {RegistrationComponent} from "./registration.component";

@NgModule(
  {
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [RegistrationComponent],
    exports: [RegistrationComponent],
    providers: [UserService]
  }
)

export class RegistrationModule{}

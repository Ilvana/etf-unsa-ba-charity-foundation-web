import {HttpModule} from "@angular/http";
import {ContactComponent} from "./contact.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {UserService} from "../userService";


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [
    ContactComponent
  ],
  exports:      [ ContactComponent, HttpModule ],
  providers: [
    UserService
  ]
})
export class ContactModule { }

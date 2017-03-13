import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/userService";
import {CommentService} from "../services/commentService";
import {AnnouncementService} from "../services/announcementService";
import {AdminComponent} from "./admin.component";
import {Tabs} from "../util/tabs.component";
import {Tab} from "../util/tab.component";

@NgModule({
  imports: [HttpModule, BrowserModule, FormsModule],
  declarations: [ AdminComponent, Tab, Tabs],
  exports: [AdminComponent],
  providers: [UserService, CommentService, AnnouncementService]
})

export class AdminModule {
}

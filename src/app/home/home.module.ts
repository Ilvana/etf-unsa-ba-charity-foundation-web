import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home.component";
import {AnnouncementService} from "../services/announcementService";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [AnnouncementService]
})

export class HomeModule {
}

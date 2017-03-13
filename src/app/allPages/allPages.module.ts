import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AllPagesComponent} from "./allPages.component";
import {AnnouncementService} from "../services/announcementService";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AllPagesComponent],
  exports: [AllPagesComponent, HttpModule],
  providers: [AnnouncementService]
})

export class AllPagesModule {
}

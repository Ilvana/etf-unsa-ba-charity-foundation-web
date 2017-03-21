import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AllPagesComponent} from "./allPages.component";
import {AnnouncementService} from "../services/announcementService";
import {RouterModule} from "@angular/router";
import {PagerService} from "../util/pager.service";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule],
  declarations: [AllPagesComponent],
  exports: [AllPagesComponent, HttpModule],
  providers: [AnnouncementService, PagerService]
})

export class AllPagesModule {
}

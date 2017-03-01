import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AllPagesComponent} from "./allPages.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AllPagesComponent],
  exports: [AllPagesComponent]
})

export class AllPagesModule {
}

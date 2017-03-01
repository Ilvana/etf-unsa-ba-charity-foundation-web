import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./about.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})

export class AboutModule {
}

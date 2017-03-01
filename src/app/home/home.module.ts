import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule {
}

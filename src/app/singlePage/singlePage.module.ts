import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {SinglePageComponent} from "./singlePage.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [SinglePageComponent],
  exports: [SinglePageComponent]
})

export class SinglePageModule {
}

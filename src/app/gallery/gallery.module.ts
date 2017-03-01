import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {GalleryComponent} from "./gallery.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [
    GalleryComponent
  ],
  exports: [GalleryComponent]
})

export class GalleryModule {
}

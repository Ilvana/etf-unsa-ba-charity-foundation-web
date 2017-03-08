import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {SinglePageComponent} from "./singlePage.component";
import {CommentService} from "../commentService";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [SinglePageComponent],
  exports: [SinglePageComponent],
  providers: [CommentService]
})

export class SinglePageModule {
}

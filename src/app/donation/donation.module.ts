import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DonationComponent} from "./donation.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [DonationComponent],
  exports: [DonationComponent]
})

export class DonationModule {
}

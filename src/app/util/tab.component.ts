import {Tabs} from "./tabs.component";
import {Input, Component} from "@angular/core";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html'
})
export class Tab {

  @Input() tabTitle: string;
   public active:boolean;

  constructor(tabs:Tabs) {
    tabs.addTab(this);
  }
}

import {Component} from '@angular/core';
import {ContactService} from "../services/contactService";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class ContactComponent {
  private model = new Contact('', '');
  mode = 'Observable';

  contact: Contact;

  constructor(private contactService: ContactService) {
  }

  onSubmit() {
    this.contactService.sendEmail(this.model).subscribe(contact=>this.contact = contact, err => {
      console.log(err);
    });
  }
}





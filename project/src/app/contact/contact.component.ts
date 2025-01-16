import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Submitted', this.contact);
      alert('Thank you for your message!');
      contactForm.reset();
    }
  }
}

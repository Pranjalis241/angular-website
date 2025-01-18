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

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', form.value);
      alert('Thank you for your message!');
      form.reset();
    }
  }
}

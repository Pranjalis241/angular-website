import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };
  userData: any = null; // To store the submitted user's data

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.addItem(this.contact).subscribe(response => {
      console.log('Registration Data added:', response);
      this.userData = response; // Store the submitted user's data
      this.contact = { name: '', email: '', message: '' }; // Reset the form
    });
  }

  onRefresh() {
    if (this.userData) {
      alert(
        `Thank you for contacting us, your data has reached us. Your data is: 
        Name: ${this.userData.name}, 
        Email: ${this.userData.email}, 
        Message: ${this.userData.message}`
      );
    } else {
      alert('No data to display. Please submit the form first.');
    }
  }
}

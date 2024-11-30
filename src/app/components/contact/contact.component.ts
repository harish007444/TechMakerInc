import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobileNumber: string = '';
  message: string = '';

  constructor() {
    emailjs.init("KkNQIOIOq9kzggXIo");
  }

  onSubmit() {
    const templateParams = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      mobileNumber: this.mobileNumber,
      message: this.message
    };

    emailjs.send('service_k4dctfe', 'template_tkoqy4t', templateParams)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        this.resetForm();
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  }

  resetForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobileNumber = '';
    this.message = '';
  }
}
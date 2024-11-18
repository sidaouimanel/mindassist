// messaging.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Logique pour traiter le formulaire
    console.log('Form Submitted!', this.formData);
    // Réinitialiser le formulaire après soumission, si nécessaire
    this.formData = { name: '', email: '', message: '' };
  }
}

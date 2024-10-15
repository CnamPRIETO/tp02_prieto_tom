import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  clientForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      civilite: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      login: ['', Validators.required],
      pays: ['', Validators.required],
    });
  }

  onSubmit() {
    
    if (this.clientForm.valid) {
      this.submitted = true;
      console.log('Form submitted successfully', this.clientForm.value);
      // Vous pouvez ici traiter les données du formulaire ou les afficher
    } else {
      console.log('Form is invalid');
      this.submitted = true;
    }  }

  get formData() {
    return this.clientForm.value;
  }
}
